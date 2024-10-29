package com.ufg.dominios_sw.repository;

import com.ufg.dominios_sw.domain.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}
