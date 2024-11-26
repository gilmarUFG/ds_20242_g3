package com.ufg.dominios_sw.dto.rating;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.dto.user.RatingUserDetail;

import java.time.LocalDateTime;

public record RatingDetail(
        Long id,
        Long movieId,
        Double rating,
        LocalDateTime date,
        String comment,
        RatingUserDetail user
) {
    public RatingDetail(Rating rating) {
        this(rating.getId(), rating.getMovie().getId(), rating.getRating(), rating.getTimestamp().toLocalDateTime(), rating.getComment(), new RatingUserDetail(rating.getUser()));
    }
}
