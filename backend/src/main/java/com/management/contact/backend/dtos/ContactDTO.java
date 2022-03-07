package com.management.contact.backend.dtos;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ContactDTO {
    private Long id;
    @EqualsAndHashCode.Include @NotBlank
    private String name;
    @EqualsAndHashCode.Include @NotBlank
    private String surname;
    @NotBlank @Email
    private String email;
    @NotBlank
    private String cellphone;
}
