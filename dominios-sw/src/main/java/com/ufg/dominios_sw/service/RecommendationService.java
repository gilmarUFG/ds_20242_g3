package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.recommendation.AverageRecommendation;
import com.ufg.dominios_sw.dto.recommendation.MovieIdsResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class RecommendationService {
    private final UserService userService;
    private final MovieService movieService;
    private final RestTemplate restTemplate;

    @Value("${fastapi.url}")
    private String fastapiUrl;


    public Page<Movie> getRecommendationsByKey(String movieKey, int page, int size) {

        String url = fastapiUrl + "/average";
        ResponseEntity<MovieIdsResponse> response = restTemplate.postForEntity(url, null, MovieIdsResponse.class);

        var movieIds = Objects.requireNonNull(response.getBody()).getMovieIds();

        return movieService.findAllByIds(movieIds, page, size);
    }

    public Page<Movie> getRecommendationsByGenre(Long userId, int page, int size) {
        var user = userService.findById(userId);
        var userRatings = user.getRatings();

        var ratingCount = userRatings.size();
        var averageRating = userRatings.stream().mapToDouble(Rating::getRating).average().orElse(0.0);


        var avgPerGenre = calculateGenreRatings(userRatings);

        avgPerGenre.put("userId", userId);
        avgPerGenre.put("ratingCount", ratingCount);
        avgPerGenre.put("ratingAvg", averageRating);
        avgPerGenre.put("children", 0.0);

        String url = fastapiUrl + "/genre";
        ResponseEntity<MovieIdsResponse> response = restTemplate.postForEntity(url, avgPerGenre, MovieIdsResponse.class);

        var movieIds = Objects.requireNonNull(response.getBody()).getMovieIds();

        return movieService.findAllByIds(movieIds, page, size);
    }

    private static Map<String, Long> genreMap() {
        Map<String, Long> genres = new HashMap<>();
        genres.put("animation", 16L);
        genres.put("comedy", 35L);
        genres.put("adventure", 12L);
        genres.put("fantasy", 14L);
        genres.put("romance", 10749L);
        genres.put("drama", 18L);
        genres.put("action", 28L);
        genres.put("crime", 80L);
        genres.put("thriller", 53L);
        genres.put("horror", 27L);
        genres.put("scienceFiction", 878L);
        genres.put("mystery", 9648L);
        genres.put("documentary", 99L);
        return genres;
    }

    public static Map<String, Object> calculateGenreRatings(List<Rating> ratings) {
        Map<String, Long> genreMap = genreMap();

        Map<Long, String> invertedGenreMap = genreMap.entrySet().stream()
                .collect(Collectors.toMap(Map.Entry::getValue, Map.Entry::getKey));

        Map<String, List<Double>> genreRatings = new HashMap<>();

        genreMap.keySet().forEach(genre -> genreRatings.put(genre, new ArrayList<>()));

        for (Rating rating : ratings) {
            Movie movie = rating.getMovie();

            for (Genre genre : movie.getGenres()) {
                var genreId = genre.getId();

                if (invertedGenreMap.containsKey(genreId)) {
                    String genreName = invertedGenreMap.get(genreId);
                    genreRatings.get(genreName).add(rating.getRating());
                }
            }
        }

        return genreRatings.entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        entry -> roundToOneDecimal(entry.getValue().stream()
                                .mapToDouble(Double::doubleValue)
                                .average()
                                .orElse(0.0))
                ));
    }

    private static double roundToOneDecimal(double value) {
        return Math.round(value * 10.0) / 10.0;
    }

}
