package com.ufg.dominios_sw.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "movies")
@NoArgsConstructor
@Getter
@Setter
public class Movie {
    @Id
    private Long tmdbId;
    private String imdbId;
    private String originalTitle;
    private String overview;
    private String genres;
    private String posterPath;
    private double voteAverage;
    private int voteCount;
}
