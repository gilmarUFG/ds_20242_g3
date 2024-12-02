package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.dto.movie.MovieDetails;
import com.ufg.dominios_sw.infra.PagedApiResponse;
import com.ufg.dominios_sw.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<PagedApiResponse<MovieDetails>> findAll(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(name = "genreId", required = false) Long genreId
    ) {
        var movies = movieService.findAll(genreId, page, pageSize);
        var movieDetailsPage = movies.map(MovieDetails::new);

        var response = new PagedApiResponse<>(
                200,
                movieDetailsPage
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public Movie findById(@PathVariable Long id) {
        return movieService.findById(id);
    }
}
