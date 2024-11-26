package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.dto.genre.GenreDetails;
import com.ufg.dominios_sw.infra.PagedApiResponse;
import com.ufg.dominios_sw.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genres")
@RequiredArgsConstructor
public class GenreController {
    private final GenreService genreService;

    @GetMapping
    public ResponseEntity<PagedApiResponse<GenreDetails>> findAll(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "10") int pageSize) {

        var genres = genreService.findAll(page, pageSize);
        var genreDetailsPage = genres.map(GenreDetails::new);

        var response = new PagedApiResponse<>(
                200,
                genreDetailsPage
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public Genre findById(@PathVariable Long id) {
        return genreService.findById(id);
    }
}
