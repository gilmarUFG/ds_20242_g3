package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.repository.MoviesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MoviesRepository movieRepository;

    public Movie findById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }
}
