package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.User;
import com.ufg.dominios_sw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public User findById(Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public User save(User user) {
        return userService.save(user);
    }

    @DeleteMapping
    public void deleteById(Long id) {
        userService.deleteById(id);
    }

    @PutMapping
    public User update(User user) {
        return userService.update(user);
    }
}
