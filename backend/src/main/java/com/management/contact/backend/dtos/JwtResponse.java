package com.management.contact.backend.dtos;

import lombok.Data;

@Data
public class JwtResponse {
    private String jwtToken;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
