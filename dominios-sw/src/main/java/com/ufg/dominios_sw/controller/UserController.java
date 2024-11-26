package com.ufg.dominios_sw.controller;

import com.ufg.dominios_sw.domain.User;
import com.ufg.dominios_sw.dto.user.UserDetails;
import com.ufg.dominios_sw.infra.ApiResponse;
import com.ufg.dominios_sw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDetails>> findById(@PathVariable Long id) {
        var user = userService.findById(id);
        var usedDetails = new UserDetails(user);

        var response = new ApiResponse<>(200, usedDetails);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public User save(@RequestBody User user) {
        return userService.save(user);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDetails>> updatePartialUser(
            @PathVariable Long id,
            @RequestBody Map<String, Object> updates) {
        User updatedUser = userService.updatePartial(id, updates);
        var usedDetails = new UserDetails(updatedUser);

        var response = new ApiResponse<>(200, usedDetails);
        return ResponseEntity.ok(response);
    }
}
