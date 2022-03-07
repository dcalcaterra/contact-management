package com.management.contact.backend.services;

public class ContactNotFoundException extends ContactServiceException {
    public ContactNotFoundException(String message) {
        super(message);
    }
}
