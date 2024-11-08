package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RatingService {
    private final RatingRepository ratingRepository;

    public Rating save(Rating rating) {
        return ratingRepository.save(rating);
    }

    public Rating findById(Long id) {
        return ratingRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        ratingRepository.deleteById(id);
    }

    public Rating update(Rating rating) {
        return ratingRepository.save(rating);
    }
}
