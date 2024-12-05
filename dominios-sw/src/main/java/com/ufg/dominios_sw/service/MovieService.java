package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.repository.MoviesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MoviesRepository movieRepository;

    public Movie findById(Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));
    }

    public Page<Movie> findAll(Long genreId, String originalTitle, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        if(genreId == null && originalTitle == null) {
            return movieRepository.findAll(pageable);
        }
        return movieRepository.findMoviesByGenreIdAndTitleNative(genreId, originalTitle, pageable);
    }

    public Page<Movie> findAllByIds(List<Long> ids, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return movieRepository.findAllByIds(ids, pageable);
    }
}
