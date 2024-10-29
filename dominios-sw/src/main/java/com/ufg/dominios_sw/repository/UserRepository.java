package com.ufg.dominios_sw.repository;

import com.ufg.dominios_sw.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
