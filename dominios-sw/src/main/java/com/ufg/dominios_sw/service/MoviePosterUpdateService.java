package com.ufg.dominios_sw.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.repository.MoviesRepository;
import jakarta.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
@Transactional
public class MoviePosterUpdateService {

    private final MoviesRepository moviesRepository;

    private static final String TMDB_API_URL = "https://api.themoviedb.org/3/movie/";
    private static final String TMDB_API_KEY = "893a77bb80325b17c47ba528b0e276ef";

    public MoviePosterUpdateService(MoviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    public void updateMovieReleaseDates() {
        List<Movie> movies = moviesRepository.findAll();
        RestTemplate restTemplate = new RestTemplate();

        for (Movie movie : movies) {
            try {
                String url = TMDB_API_URL + movie.getId() + "?api_key=" + TMDB_API_KEY;
                JsonNode response = restTemplate.getForObject(url, JsonNode.class);

                if (response != null && response.has("release_date")) {
                    String releaseDateStr = response.get("release_date").asText();

                    if (!releaseDateStr.isEmpty()) {
                        LocalDate releaseDate = LocalDate.parse(releaseDateStr, DateTimeFormatter.ISO_DATE);
                        movie.setReleaseDate(releaseDate);

                        moviesRepository.save(movie);

                        System.out.println("Atualizado release_date para o filme: " + movie.getOriginalTitle());
                    }
                }

                TimeUnit.MILLISECONDS.sleep(150);

            } catch (Exception e) {
                System.err.println("Erro ao atualizar release_date para o filme ID: " + movie.getId());
                e.printStackTrace();
            }
        }
    }

    public void updateMoviePosters() {
        List<Movie> movies = moviesRepository.findAll();
        RestTemplate restTemplate = new RestTemplate();

        for (Movie movie : movies) {
            try {
                String url = TMDB_API_URL + movie.getId() + "?api_key=" + TMDB_API_KEY;
                JsonNode response = restTemplate.getForObject(url, JsonNode.class);

                if (response != null && response.has("poster_path")) {
                    String newPosterPath = response.get("poster_path").asText();

                    // Atualizar o posterPath no filme
                    movie.setPosterPath(newPosterPath);
                    moviesRepository.save(movie);

                    System.out.println("Atualizado poster_path para o filme: " + movie.getOriginalTitle());
                }

                TimeUnit.MILLISECONDS.sleep(200);

            } catch (Exception e) {
                System.err.println("Erro ao atualizar poster_path para o filme ID: " + movie.getId());
                e.printStackTrace();
            }
        }
    }


}
