package com.management.contact.backend.services;

import com.management.contact.backend.dtos.ContactDTO;
import com.management.contact.backend.entities.Contact;
import com.management.contact.backend.repositories.ContactRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ContactServiceImpl implements ContactService {
    @Autowired
    ContactRepository contactRepository;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<ContactDTO> getAllContacts() {
        List<ContactDTO> contactDTOList = contactRepository.findAll()
                .stream()
                .map(contact -> modelMapper.map(contact, ContactDTO.class))
                .collect(Collectors.toList());

        return contactDTOList;
    }

    @Override
    public Optional<ContactDTO> getContact(Long id) {
        Optional<ContactDTO> contactDTO= contactRepository.findById(id)
                .map(contact-> modelMapper.map(contact, ContactDTO.class));
        return contactDTO;
    }

    @Override
    public boolean addContact(ContactDTO contactDTO) {
        List<ContactDTO> contactDTOList = contactRepository.findAll()
                .stream()
                .map(contact -> modelMapper.map(contact, ContactDTO.class))
                .collect(Collectors.toList());
        if(contactDTOList.contains(contactDTO)) {
            return false;
        }
        else {
            Contact contact = modelMapper.map(contactDTO, Contact.class);
            contactRepository.saveAndFlush(contact);
            return true;
        }
    }

    @Override
    public boolean removeContact(Long id) {
        Optional<ContactDTO> contactDTO = getContact(id);
        if(!contactDTO.isPresent())
            return false;

        contactRepository.deleteById(id);
        return true;
    }
}
