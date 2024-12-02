package com.ufg.dominios_sw.service;

import com.ufg.dominios_sw.domain.User;
import com.ufg.dominios_sw.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    public User updatePartial(Long id, Map<String, Object> updates) {
        User user = findById(id);

        updates.forEach((key, value) -> {
            switch (key) {
                case "name":
                    user.setName((String) value);
                    break;
                case "age":
                    user.setAge((Integer) value);
                    break;
                case "email":
                    user.setEmail((String) value);
                    break;
                case "password":
                    user.setPassword((String) value);
                    break;
                default:
                    throw new IllegalArgumentException("Cannot update field: " + key);
            }
        });

        return userRepository.save(user);
    }
}
