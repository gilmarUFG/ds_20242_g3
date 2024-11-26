package com.ufg.dominios_sw.dto.user;

import com.ufg.dominios_sw.domain.User;

public record RatingUserDetail(
        Long userId,
        String userName

) {
    public RatingUserDetail(User user) {
        this(user.getId(), user.getName());
    }
}
