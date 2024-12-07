package com.ufg.dominios_sw.repository;

import com.ufg.dominios_sw.domain.Movie;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MoviesRepository extends JpaRepository<Movie, Long> {
    @Query(value = "SELECT m.* FROM movies m " +
            "LEFT JOIN movie_genres mg ON m.id = mg.movie_id " +
            "WHERE (:genreId IS NULL OR mg.genre_id = :genreId)",
            countQuery = "SELECT COUNT(*) FROM movies m " +
                    "LEFT JOIN movie_genres mg ON m.id = mg.movie_id " +
                    "WHERE (:genreId IS NULL OR mg.genre_id = :genreId)",
            nativeQuery = true)
    Page<Movie> findMoviesByGenreIdNative(@Param("genreId") Long genreId, Pageable pageable);

    @Query(value = "SELECT m.* FROM movies m " +
            "LEFT JOIN movie_genres mg ON m.id = mg.movie_id " +
            "WHERE (:genreId IS NULL OR mg.genre_id = :genreId) " +
            "AND (:title IS NULL OR m.original_title ILIKE %:title%)",
            countQuery = "SELECT COUNT(*) FROM movies m " +
                    "LEFT JOIN movie_genres mg ON m.id = mg.movie_id " +
                    "WHERE (:genreId IS NULL OR mg.genre_id = :genreId) " +
                    "AND (:title IS NULL OR m.original_title ILIKE %:title%)",
            nativeQuery = true)
    Page<Movie> findMoviesByGenreIdAndTitleNative(@Param("genreId") Long genreId,
                                                  @Param("title") String title,
                                                  Pageable pageable);

    @Query(value = "SELECT m.* FROM movies m WHERE m.id IN :ids",
            countQuery = "SELECT COUNT(*) FROM movies m WHERE m.id IN :ids",
            nativeQuery = true)
    Page<Movie> findAllByIds(@Param("ids") List<Long> ids, Pageable pageable);

    @Query(value = "SELECT m.* FROM movies m " +
            "JOIN movie_genres mg ON m.id = mg.movie_id " +
            "WHERE mg.genre_id = :genreId",
            countQuery = "SELECT COUNT(*) FROM movies m " +
                    "JOIN movie_genres mg ON m.id = mg.movie_id " +
                    "WHERE mg.genre_id = :genreId",
            nativeQuery = true)
    Page<Movie> findMoviesByExactGenreId(@Param("genreId") Long genreId, Pageable pageable);

    @Query(value = "SELECT m.* FROM movies m " +
            "WHERE LOWER(m.original_title) LIKE LOWER(CONCAT('%', :title, '%'))",
            countQuery = "SELECT COUNT(*) FROM movies m " +
                    "WHERE LOWER(m.original_title) LIKE LOWER(CONCAT('%', :title, '%'))",
            nativeQuery = true)
    Page<Movie> findMoviesByTitle(@Param("title") String title, Pageable pageable);


}
