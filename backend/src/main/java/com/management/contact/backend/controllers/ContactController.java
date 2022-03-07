package com.management.contact.backend.controllers;

import com.management.contact.backend.dtos.ContactDTO;
import com.management.contact.backend.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
@Validated
@RequestMapping("/API/contacts")
public class ContactController {
    @Autowired
    ContactService contactService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping({"", "/"})
    List<ContactDTO> getAllContacts() {
        List<ContactDTO> contacts = contactService.getAllContacts();
        return contacts;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    ContactDTO getContact(@NotNull @PathVariable Long id) {
        Optional<ContactDTO> contactDTO = contactService.getContact(id);
        if(!contactDTO.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact {id} not found");
        }
        return contactDTO.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping({"", "/"})
    boolean addContact(@Valid @RequestBody ContactDTO contactDTO) {
        boolean added = contactService.addContact(contactDTO);
        if(!added) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Contact is not valid");
        }
        return true;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    boolean removeContact(@NotNull @PathVariable Long id) {
        boolean removed = contactService.removeContact(id);
        if(!removed) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contact {id} not found");
        }
        return true;
    }

}
