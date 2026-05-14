package com.example.vms.controller;

import com.example.vms.dto.ProfileRequest;
import com.example.vms.model.User;
import com.example.vms.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProfileController {

    private final UserRepository userRepository;

    public ProfileController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(HttpSession session) {
        Integer userId = getUserIdFromSession(session);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User is not authenticated."));
        }

        User user = userRepository.findById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User profile not found."));
        }

        Map<String, Object> profile = new HashMap<>();
        profile.put("firstName", user.getFirstName());
        profile.put("lastName", user.getLastName());
        profile.put("email", user.getEmail());
        profile.put("phone", user.getPhone());
        profile.put("birthDate", user.getBirthDate());
        profile.put("address", user.getAddress());
        profile.put("city", user.getCity());
        profile.put("state", user.getState());
        profile.put("zip", user.getZip());
        profile.put("bio", user.getBio());
        profile.put("imageUrl", user.getPhoto());

        return ResponseEntity.ok(profile);
    }

    @PostMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody ProfileRequest request, HttpSession session) {
        Integer userId = getUserIdFromSession(session);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "User is not authenticated."));
        }

        User user = userRepository.findById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User profile not found."));
        }

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setBirthDate(request.getBirthDate());
        user.setAddress(request.getAddress());
        user.setCity(request.getCity());
        user.setState(request.getState());
        user.setZip(request.getZip());
        user.setBio(request.getBio());
        user.setPhoto(request.getImageUrl());

        userRepository.updateProfile(user);

        return ResponseEntity.ok(Map.of("message", "Profile updated successfully."));
    }

    private Integer getUserIdFromSession(HttpSession session) {
        Object userId = session.getAttribute("userId");
        return userId instanceof Integer ? (Integer) userId : null;
    }
}
