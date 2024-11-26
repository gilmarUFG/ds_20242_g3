package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.repository.GenreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GenreService {
    private final GenreRepository genreRepository;

    public Page<Genre> findAll(int page, int pageSize) {
        var pageable = PageRequest.of(page, pageSize);

        return genreRepository.findAll(pageable);
    }

    public Genre findById(Long id) {
        return genreRepository.findById(id).orElse(null);
    }
}
