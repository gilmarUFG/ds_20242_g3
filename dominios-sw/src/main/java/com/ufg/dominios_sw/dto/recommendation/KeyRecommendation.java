package com.ufg.dominios_sw.dto.recommendation;

public record KeyRecommendation(
        String search,
        Integer top_k
) {
    public KeyRecommendation(String search, Integer top_k) {
        this.search = search;
        this.top_k = top_k;
    }
}
