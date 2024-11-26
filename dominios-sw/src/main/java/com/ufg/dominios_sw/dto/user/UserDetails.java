package com.ufg.dominios_sw.dto.user;

import com.ufg.dominios_sw.domain.User;

public record UserDetails(
        Long id,
        String name,
        Integer age,
        String email
) {
    public UserDetails(User user) {
        this(user.getId(), user.getName(), user.getAge(), user.getEmail());
    }
}
