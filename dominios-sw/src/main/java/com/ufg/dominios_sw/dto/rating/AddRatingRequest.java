package com.ufg.dominios_sw.dto.rating;

import com.ufg.dominios_sw.config.ratingValidator.ValidRating;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddRatingRequest(
        @NotNull
        Long movieId,
        @NotNull
        Long userId,
        @NotNull
        @ValidRating
        Double rating,
        String comment
) {
}
