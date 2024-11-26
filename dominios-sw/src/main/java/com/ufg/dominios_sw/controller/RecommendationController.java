package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.dto.recommendation.AverageRecommendation;
import com.ufg.dominios_sw.dto.recommendation.GenreRecommendation;
import com.ufg.dominios_sw.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
    private static final String FASTAPI_BASE_URL = "http://fastapi:8000";

    @GetMapping("/average")
    public ResponseEntity<String> getAverageRecommendation(@RequestParam Long userId) {
        // Processar informações necessárias para o DTO
        Integer ratingCount = 3;
        Double averageRating = 3.1;

        // Criar o DTO
        AverageRecommendation averageRecommendation = new AverageRecommendation(userId, ratingCount, averageRating);

        // Enviar para a API FastAPI
        String url = FASTAPI_BASE_URL + "/average";
        ResponseEntity<String> response = restTemplate.postForEntity(url, averageRecommendation, String.class);

        return response;
    }

    @GetMapping("/genre")
    public ResponseEntity<String> getGenreRecommendation(@RequestParam Long userId) {
        // Processar informações relacionadas aos gêneros
        GenreRecommendation genreRecommendation = processGenreRecommendation(userId);

        // Enviar para a API FastAPI
        String url = FASTAPI_BASE_URL + "/genre";
        ResponseEntity<String> response = restTemplate.postForEntity(url, genreRecommendation, String.class);

        return response;
    }

    private GenreRecommendation processGenreRecommendation(Long userId) {
        // Simular lógica de cálculo de recomendações por gênero

        // Dummy values para os gêneros (substituir com a lógica correta)
        return new GenreRecommendation(
                userId,
                1,
                5.0,
                1.0, 0.5, 0.8, 0.6, 0.7, 0.4, 0.9, 0.3, 0.8, 0.5, 0.6, 0.4, 0.7, 0.9
        );
    }
}
