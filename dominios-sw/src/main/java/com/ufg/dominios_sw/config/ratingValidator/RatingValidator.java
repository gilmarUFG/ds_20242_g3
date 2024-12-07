package com.ufg.dominios_sw.config.ratingValidator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class RatingValidator implements ConstraintValidator<ValidRating, Double> {

    @Override
    public boolean isValid(Double value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        if (value < 0.5 || value > 5.0) {
            return false;
        }

        return value % 0.5 == 0;
    }
}