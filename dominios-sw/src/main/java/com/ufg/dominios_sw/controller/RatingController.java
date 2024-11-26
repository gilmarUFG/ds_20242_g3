package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.rating.AddRatingRequest;
import com.ufg.dominios_sw.dto.rating.RatingDetail;
import com.ufg.dominios_sw.dto.rating.UserRating;
import com.ufg.dominios_sw.infra.ApiResponse;
import com.ufg.dominios_sw.infra.PagedApiResponse;
import com.ufg.dominios_sw.service.RatingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
@RequiredArgsConstructor
public class RatingController {
    private final RatingService ratingService;

    @GetMapping("/{id}")
    public Rating findById(@PathVariable Long id) {
        return ratingService.findById(id);
    }

    @GetMapping
    public List<Rating> findAll() {
        return ratingService.findAll();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<PagedApiResponse<UserRating>> getRatingsByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
            ) {
        var ratings = ratingService.findByUserId(userId, page, size);
        var ratingsDetails = ratings.map(UserRating::new);

        var response = new PagedApiResponse<>(
                200,
                ratingsDetails
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/movie/{movieId}")
    public ResponseEntity<PagedApiResponse<RatingDetail>> getRatingsByMovie(
            @PathVariable Long movieId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
            ) {
        var ratings = ratingService.findByMovieId(movieId, page, size);
        var ratingsDetails = ratings.map(RatingDetail::new);

        var response = new PagedApiResponse<>(
                200,
                ratingsDetails
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserRating>> save(@RequestBody @Valid AddRatingRequest addRatingRequest) {
        var ratingSaved = ratingService.save(addRatingRequest);
        var response = new ApiResponse<>(
                201,
                new UserRating(ratingSaved)
        );
        return ResponseEntity.ok(response);
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
