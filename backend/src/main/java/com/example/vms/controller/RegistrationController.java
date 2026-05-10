package com.example.vms.controller;

import com.example.vms.model.Registration;
import com.example.vms.repository.RegistrationRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class RegistrationController {

    private final RegistrationRepository registrationRepository;

    public RegistrationController(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @PostMapping("/register")
    public String register(@RequestBody Registration registration) {
        registrationRepository.save(registration);
        return "Registered successfully";
    }
}

