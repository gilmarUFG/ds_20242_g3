package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.User;
import com.ufg.dominios_sw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public User update(User user) {
        return userRepository.save(user);
    }
}
