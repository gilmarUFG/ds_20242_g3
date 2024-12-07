package com.ufg.dominios_sw.dto.rating;

import com.ufg.dominios_sw.config.ratingValidator.ValidRating;
import jakarta.validation.constraints.NotNull;

public record UpdateRatingRequest(
        @ValidRating
        Double rating,
        String comment
) {
}
