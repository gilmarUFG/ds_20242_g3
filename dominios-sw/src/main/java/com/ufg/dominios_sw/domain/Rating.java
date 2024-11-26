package com.ufg.dominios_sw.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name = "ratings")
@NoArgsConstructor
@Getter
@Setter
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;

    @Column(columnDefinition = "TEXT")
    String comment;
    private double rating;
    private Timestamp timestamp;

    public Rating(User user, Movie movie, String comment, double rating) {
        this.user = user;
        this.movie = movie;
        this.comment = comment;
        this.rating = rating;
        this.timestamp = Timestamp.from(Instant.now());
    }
}

