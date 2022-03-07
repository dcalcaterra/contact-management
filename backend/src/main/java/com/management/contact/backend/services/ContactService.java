package com.management.contact.backend.services;

import com.management.contact.backend.dtos.ContactDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    List<ContactDTO> getAllContacts();
    Optional<ContactDTO> getContact(Long id);
    boolean addContact(ContactDTO contact);
    boolean removeContact(Long id);

}
