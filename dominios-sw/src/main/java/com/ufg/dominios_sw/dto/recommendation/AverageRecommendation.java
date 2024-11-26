package com.ufg.dominios_sw.dto.recommendation;

public record AverageRecommendation(
        Long userId,
        Integer ratingCount,
        Double averageRating
) {
    public AverageRecommendation(Long userId, Integer ratingCount, Double averageRating) {
        this.userId = userId;
        this.ratingCount = ratingCount;
        this.averageRating = averageRating;
    }
}
