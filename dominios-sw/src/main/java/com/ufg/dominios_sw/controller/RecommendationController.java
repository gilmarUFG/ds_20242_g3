package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.dto.movie.MovieDetails;
import com.ufg.dominios_sw.infra.PagedApiResponse;
import com.ufg.dominios_sw.repository.RatingRepository;
import com.ufg.dominios_sw.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@RestController
@RequestMapping("/recommendations")
public class RecommendationController {
    private final RestTemplate restTemplate;
    private final RatingRepository ratingRepository;
    private final RecommendationService recommendationService;

    @Value("${fastapi.url}")
    private String fastapiUrl;


    @GetMapping("/key/{movieKey}")
    public ResponseEntity<PagedApiResponse<MovieDetails>> getAverageRecommendation(
            @PathVariable String movieKey,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        var moviesRecommendations = recommendationService.getRecommendationsByKey(movieKey, page, size);
        var moviesDetails = moviesRecommendations.map(MovieDetails::new);

        var response = new PagedApiResponse<>(
                200,
                moviesDetails
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/genre/{userId}")
    public ResponseEntity<PagedApiResponse<MovieDetails>> getGenreRecommendation(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        var moviesRecommendations = recommendationService.getRecommendationsByGenre(userId, page, size);
        var moviesDetails = moviesRecommendations.map(MovieDetails::new);

        var response = new PagedApiResponse<>(
                200,
                moviesDetails
        );

        return ResponseEntity.ok(response);
    }
}
