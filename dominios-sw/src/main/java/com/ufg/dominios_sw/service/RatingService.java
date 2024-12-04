package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.rating.AddRatingRequest;
import com.ufg.dominios_sw.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {
    private final RatingRepository ratingRepository;
    private final UserService userService;
    private final MovieService movieService;

    public Rating save(AddRatingRequest addRatingRequest) {
        var user = userService.findById(addRatingRequest.userId());

        if(user.getRatings().stream().anyMatch(e -> e.getMovie().getId().equals(addRatingRequest.movieId()))) {
            throw new RuntimeException("User already rated this movie");
        }

        var movie = movieService.findById(addRatingRequest.movieId());

        var rating = new Rating(user, movie, addRatingRequest.comment(), addRatingRequest.rating());

        return ratingRepository.save(rating);
    }

    public Rating findById(Long id) {
        return ratingRepository.findById(id).orElse(null);
    }

    public Page<Rating> findAll(int page, int size) {
        var pageable = PageRequest.of(page, size);
        return ratingRepository.findAll(pageable);
    }

    public Page<Rating> findByUserId(Long userId, int page, int size) {
        var pageable = PageRequest.of(page, size);
        return ratingRepository.findByUserId(userId, pageable);
    }

    public Page<Rating> findByMovieId(Long movieId, int page, int size) {
        var pageable = PageRequest.of(page, size);
        return ratingRepository.findByMovieId(movieId, pageable);
    }

    public void deleteById(Long id) {
        ratingRepository.deleteById(id);
    }

    public Rating update(Rating rating) {
        return ratingRepository.save(rating);
    }
}
