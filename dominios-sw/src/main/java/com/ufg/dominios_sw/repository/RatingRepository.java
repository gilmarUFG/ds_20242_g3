package com.ufg.dominios_sw.repository;

import com.ufg.dominios_sw.domain.Rating;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    Page<Rating> findByUserId(Long userId, Pageable pageable);
    Page<Rating> findByMovieId(Long movieId, Pageable pageable);
}
