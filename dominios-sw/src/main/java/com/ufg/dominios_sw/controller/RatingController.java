package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.rating.AddRatingRequest;
import com.ufg.dominios_sw.dto.rating.RatingDetail;
import com.ufg.dominios_sw.dto.rating.UpdateRatingRequest;
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
    public ResponseEntity<ApiResponse<RatingDetail>> findById(@PathVariable Long id) {
        var rating = ratingService.findById(id);
        var ratingDetails = new RatingDetail(rating);

        var response = new ApiResponse<>(
                200,
                ratingDetails
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<PagedApiResponse<UserRating>> findAll(
                                @RequestParam(defaultValue = "0") int page,
                                @RequestParam(defaultValue = "10") int size
    ) {
        var ratings = ratingService.findAll(page, size);
        var ratingsDetails = ratings.map(UserRating::new);

        var response = new PagedApiResponse<>(
                200,
                ratingsDetails
        );

        return ResponseEntity.ok(response);
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

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        ratingService.deleteById(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<UserRating>> update(
            @PathVariable Long id,
            @RequestBody @Valid UpdateRatingRequest rating
            ) {

        var ratingUpdated = ratingService.updatePartial(id, rating);
        var response = new ApiResponse<>(
                200,
                new UserRating(ratingUpdated)
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/{userId}/movie/{movieId}")
    public ResponseEntity<Boolean> haveUserRatedMovie(
            @PathVariable Long userId,
            @PathVariable Long movieId
            ) {

        return ResponseEntity.ok(ratingService.haveUserRatedMovie(userId, movieId));
    }
}
