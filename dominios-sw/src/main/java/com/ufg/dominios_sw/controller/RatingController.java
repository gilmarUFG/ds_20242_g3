package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController("/ratings")
@RequiredArgsConstructor
public class RatingController {
    private final RatingService ratingService;

    @GetMapping("/{id}")
    public Rating findById(Long id) {
        return ratingService.findById(id);
    }

    @PostMapping
    public Rating save(Rating rating) {
        return ratingService.save(rating);
    }

    @DeleteMapping
    public void deleteById(Long id) {
        ratingService.deleteById(id);
    }

    @PutMapping
    public Rating update(Rating rating) {
        return ratingService.update(rating);
    }
}
