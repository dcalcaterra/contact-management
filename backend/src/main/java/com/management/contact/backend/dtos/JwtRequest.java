package com.management.contact.backend.dtos;

import lombok.Data;
import org.hibernate.validator.constraints.Length;
import javax.validation.constraints.NotBlank;

@Data
public class JwtRequest {
    @NotBlank
    private String username;
    @NotBlank @Length(min = 8)
    private String password;
}
