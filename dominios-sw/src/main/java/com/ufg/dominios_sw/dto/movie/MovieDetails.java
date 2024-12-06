package com.ufg.dominios_sw.dto.movie;

import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.dto.genre.GenreDetails;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public record MovieDetails(
        Long id,
        String title,
        String overview,
        List<GenreDetails> genres,
        String posterPath,
        Double voteAverage,
        Integer voteCount,
        LocalDate releaseDate
) {
    public MovieDetails(Movie movie) {
        this(movie.getId(), movie.getOriginalTitle(), movie.getOverview(), movie.getGenres().stream().map(GenreDetails::new).collect(Collectors.toList()), movie.getPosterPath(), movie.getVoteAverage(), movie.getVoteCount(), movie.getReleaseDate());
    }

}
