package com.ufg.dominios_sw.databaseInitialization;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import com.opencsv.exceptions.CsvValidationException;
import com.ufg.dominios_sw.domain.Genre;
import com.ufg.dominios_sw.domain.Movie;
import com.ufg.dominios_sw.domain.Rating;
import com.ufg.dominios_sw.domain.User;
import com.ufg.dominios_sw.repository.GenreRepository;
import com.ufg.dominios_sw.repository.MoviesRepository;
import com.ufg.dominios_sw.repository.RatingRepository;
import com.ufg.dominios_sw.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Timestamp;
import java.util.*;

@RequiredArgsConstructor
public class DatabaseInitializer {
    private final MoviesRepository moviesRepository;
    private final RatingRepository ratingRepository;
    private final UserRepository userRepository;
    private final GenreRepository genreRepository;
    private static Integer LIMIT = 100000;

    public void init() throws IOException, CsvException, InterruptedException {
        System.out.println("Populando dados...");
        populateMovies();
        System.out.println("Aguardando 10 segundos antes de continuar...");
        Thread.sleep(10000);
        populateUsersAndRatings();
        System.out.println("População concluída!");
    }

    private void populateMovies() throws IOException, CsvValidationException {
        try (CSVReader reader = new CSVReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("metadata/movies_metadata.csv")))
        )) {
            String[] row;
            int index = 0; // Para rastrear o índice atual
            while ((row = reader.readNext()) != null && index <= LIMIT) {
                index++;
                // Ignora o cabeçalho
                if (index == 1) {
                    continue;
                }

                try {
                    if (row.length >= 24) { // Verifica se a linha tem colunas suficientes
                        Movie movie = getMovie(row);
                        moviesRepository.save(movie);
                    } else {
                        System.out.println("Linha ignorada: número insuficiente de colunas. Índice: " + index);
                    }
                } catch (Exception e) {
                    System.err.println("Erro ao processar a linha " + index + ": " + e.getMessage());
                }
            }
        }
        System.gc();
    }

    private Movie getMovie(String[] row) {
        Movie movie = new Movie();
        movie.setId(Long.parseLong(row[5])); // id
        movie.setImdbId(row[6]); // imdb_id
        movie.setOriginalTitle(row[8]); // original_title
        movie.setOverview(row[9]); // overview
        movie.setPosterPath(row[11]); // poster_path
        movie.setVoteAverage(Double.parseDouble(row[22])); // vote_average
        movie.setVoteCount(Integer.parseInt(row[23])); // vote_count

        // Parse dos gêneros
        Set<Genre> genres = parseGenres(row[3]);
        movie.getGenres().addAll(genres);
        return movie;
    }

    private void populateUsersAndRatings() throws IOException, CsvValidationException {
        try (CSVReader reader = new CSVReader(
                new InputStreamReader(Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("metadata/ratings.csv")))
        )) {
            String[] row;
            Set<Long> userIds = new HashSet<>();
            List<Rating> ratingsBatch = new ArrayList<>();
            int batchSize = 100; // Defina o tamanho do lote para salvar ratings
            int index = 0;

            while ((row = reader.readNext()) != null && index <= LIMIT) {
                index++;
                // Ignorar o cabeçalho
                if (index == 1) {
                    continue;
                }

                try {
                    Long userId = Long.parseLong(row[0]); // userId
                    Long movieId = Long.parseLong(row[1]); // movieId
                    double ratingValue = Double.parseDouble(row[2]); // rating
                    Timestamp timestamp = new Timestamp(Long.parseLong(row[3])); // timestamp

                    // Criar usuário se ainda não existir
                    if (!userIds.contains(userId)) {
                        User user = new User();
                        user.setId(userId);
                        userRepository.save(user);
                        userIds.add(userId);
                    }

                    // Buscar o filme e criar o rating
                    Movie movie = moviesRepository.findById(movieId).orElse(null);
                    if (movie != null) {
                        Rating rating = new Rating();
                        rating.setUser(userRepository.findById(userId).orElse(null));
                        rating.setMovie(movie);
                        rating.setRating(ratingValue);
                        rating.setTimestamp(timestamp);
                        ratingsBatch.add(rating);

                        // Salvar ratings em lotes
                        if (ratingsBatch.size() == batchSize) {
                            ratingRepository.saveAll(ratingsBatch);
                            ratingsBatch.clear(); // Limpar o lote após salvar
                        }
                    }
                } catch (Exception e) {
                    System.err.println("Erro ao processar a linha " + index + ": " + e.getMessage());
                }
            }

            // Salvar quaisquer ratings restantes no lote
            if (!ratingsBatch.isEmpty()) {
                ratingRepository.saveAll(ratingsBatch);
            }
        }
    }

    private Set<Genre> parseGenres(String genresData) {
        Set<Genre> genres = new HashSet<>();

        // Simulando um parse de dados no formato: [{'id': 16, 'name': 'Animation'}, ...]
        genresData = genresData.replace("[", "").replace("]", "").replace("'", "");
        String[] genreEntries = genresData.split("},\\s*\\{");

        for (String genreEntry : genreEntries) {
            genreEntry = genreEntry.replace("{", "").replace("}", "");
            String[] attributes = genreEntry.split(",\\s*");
            Long id = null;
            String name = null;

            for (String attribute : attributes) {
                String[] keyValue = attribute.split(":\\s*");
                if (keyValue[0].trim().equalsIgnoreCase("id")) {
                    id = Long.parseLong(keyValue[1].trim());
                } else if (keyValue[0].trim().equalsIgnoreCase("name")) {
                    name = keyValue[1].trim();
                }
            }

            if (id != null && name != null) {
                // Verifica se o gênero já existe
                Optional<Genre> existingGenre = genreRepository.findById(id);
                if (existingGenre.isPresent()) {
                    genres.add(existingGenre.get());
                    continue; // Pule para o próximo genreEntry
                }

                // Caso contrário, crie e persista o novo gênero
                Genre genre = new Genre();
                genre.setId(id);
                genre.setName(name);
                genreRepository.save(genre);
                genres.add(genre);
            }
        }

        return genres;
    }

}
