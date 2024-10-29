package com.ufg.dominios_sw.repository;

import com.ufg.dominios_sw.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long> {
}
