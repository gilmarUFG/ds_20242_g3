package com.ufg.dominios_sw.config.ratingValidator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = RatingValidator.class)
@Target({ ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidRating {
    String message() default "Rating must be between 0.5 and 5.0, and a multiple of 0.5";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}