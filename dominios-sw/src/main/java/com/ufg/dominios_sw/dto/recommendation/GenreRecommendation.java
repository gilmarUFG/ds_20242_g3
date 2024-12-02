package com.ufg.dominios_sw.dto.recommendation;

public record GenreRecommendation(
        Long userId,
        Integer ratingCount,
        Double ratingAvg,
        Double action,
        Double adventure,
        Double animation,
        Double children,
        Double comedy,
        Double crime,
        Double documentary,
        Double drama,
        Double fantasy,
        Double horror,
        Double mystery,
        Double romance,
        Double scienceFiction,
        Double thriller
) {
    public GenreRecommendation(Long userId, Integer ratingCount, Double ratingAvg, Double action, Double adventure, Double animation, Double children, Double comedy, Double crime, Double documentary, Double drama, Double fantasy, Double horror, Double mystery, Double romance, Double scienceFiction, Double thriller) {
        this.userId = userId;
        this.ratingCount = ratingCount;
        this.ratingAvg = ratingAvg;
        this.action = action;
        this.adventure = adventure;
        this.animation = animation;
        this.children = children;
        this.comedy = comedy;
        this.crime = crime;
        this.documentary = documentary;
        this.drama = drama;
        this.fantasy = fantasy;
        this.horror = horror;
        this.mystery = mystery;
        this.romance = romance;
        this.scienceFiction = scienceFiction;
        this.thriller = thriller;
    }
}
