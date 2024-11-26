package com.ufg.dominios_sw.dto.genre;

import com.ufg.dominios_sw.domain.Genre;

public record GenreDetails(
        Long id,
        String name
) {
    public GenreDetails(Genre genre) {
        this(genre.getId(), genre.getName());
    }
}
