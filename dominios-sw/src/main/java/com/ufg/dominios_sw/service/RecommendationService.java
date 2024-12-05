package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.recommendation.KeyRecommendation;
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
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestClientException;
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

        var keyRecommendationRequest = new KeyRecommendation(movieKey, 25);
        String url = fastapiUrl + "/recommendations/content";

        try {
            ResponseEntity<MovieIdsResponse> response = restTemplate.postForEntity(url, keyRecommendationRequest, MovieIdsResponse.class);

            var movieIds = Objects.requireNonNull(response.getBody()).getMovieIds();

            return movieService.findAllByIds(movieIds, page, size);
        } catch (Exception ex) {
            System.out.println("Retornando todos os filmes");
            return movieService.findAll(null, null, page, size);
        }
    }

    public Page<Movie> getRecommendationsByGenre(Long userId, int page, int size) {
        var user = userService.findById(userId);
        var userRatings = user.getRatings();

        var ratingCount = userRatings.size();
        var averageRating = userRatings.stream().mapToDouble(Rating::getRating).average().orElse(0.0);


        var avgPerGenre = calculateGenreRatings(userRatings);

        avgPerGenre.put("new_user_id", userId);
        avgPerGenre.put("new_rating_count", ratingCount);
        avgPerGenre.put("new_rating_ave", averageRating);
        avgPerGenre.put("new_childrens", 0.0);
        avgPerGenre.put("top_k", 10);

        String url = fastapiUrl + "/recommendations/user";

        try {
            ResponseEntity<MovieIdsResponse> response = restTemplate.postForEntity(url, avgPerGenre, MovieIdsResponse.class);

            var movieIds = Objects.requireNonNull(response.getBody()).getMovieIds();

            return movieService.findAllByIds(movieIds, page, size);
        } catch (Exception ex) {
            System.out.println("Retornando todos os filmes");
            return movieService.findAll(null,null, page, size);
        }
    }

    private static Map<String, Long> genreMap() {
        Map<String, Long> genres = new HashMap<>();
        genres.put("new_animation", 16L);
        genres.put("new_comedy", 35L);
        genres.put("new_adventure", 12L);
        genres.put("new_fantasy", 14L);
        genres.put("new_romance", 10749L);
        genres.put("new_drama", 18L);
        genres.put("new_action", 28L);
        genres.put("new_crime", 80L);
        genres.put("new_thriller", 53L);
        genres.put("new_horror", 27L);
        genres.put("new_scifi", 878L);
        genres.put("new_mystery", 9648L);
        genres.put("new_documentary", 99L);
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
