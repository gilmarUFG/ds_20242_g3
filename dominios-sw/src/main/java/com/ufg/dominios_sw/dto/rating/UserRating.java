package com.ufg.dominios_sw.dto.rating;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.user.RatingUserDetail;

import java.time.LocalDateTime;

public record UserRating(
        Long id,
        Long movieId,
        Double rating,
        String comment,
        LocalDateTime date) {
    public UserRating(Rating rating) {
        this(rating.getId(), rating.getMovie().getId(), rating.getRating(), rating.getComment(), rating.getTimestamp().toLocalDateTime());
    }
}