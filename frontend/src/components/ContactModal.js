import { React, useState } from 'react';
import validator from 'validator';

import { Button, Col, Row } from 'react-bootstrap';
import { Form, FormGroup, Modal, Toast } from 'react-bootstrap';

import Contact from '../models/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-custom.css';
import '../css/menu-blu.css';

function ContactModal(props) {
    const [errors, setErrors] = useState({});

    // Contact details
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [cellphone, setCellphone] = useState("");    
    
    const findContactFormErrors = () => {  
        const newErrors = {};

        // Checking contact details...
        if (validator.isEmpty(name) ||
                !validator.isAlpha(name, 'it-IT'))
            newErrors.name = 'Nome non valido!';
        else if (validator.isEmpty(surname) ||
                !validator.isAlpha(surname, 'it-IT'))
            newErrors.surname = 'Cognome non valido!';
        else if (validator.isEmpty(email) || 
                    !validator.isEmail(email))
            newErrors.email = 'Indirizzo e-mail non valido!';
        else if (validator.isEmpty(cellphone)|| 
                    !validator.isNumeric(cellphone))
            newErrors.cellphone = 'Numero di telefono non valido!';

        return newErrors;
    }
    
    const handleNewContactFormSubmit = e => {
        e.preventDefault();

        // Form validation
        const newErrors = findContactFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            let contact = new Contact(undefined, name, surname, email, cellphone);
            props.handleNewContactInsert(contact);
        }
    }
    
    return (
        <Modal show={props.modalShow}
            onHide={() => {props.handleNewContactModalHide();}}
            size="md"
            aria-labelledby="contained-modal-title-vcenter" 
            centered>
            <Form onSubmit={handleNewContactFormSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 style={{borderBottom: "2px solid #72c02c"}}>
                            AGGIUNGI CONTATTO
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <FormGroup as={Row} className="mb-3">
                            <Col sm="12">
                                <Form.Label htmlFor="name">Nome</Form.Label>
                                <Form.Control type="text"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    placeholder="Nome"
                                    style={{marginBottom: "10px", maxHeight: "40px", borderRadius: "0px"}}
                                    onChange={(ev) => {
                                        if (!!errors["name"]) setErrors({
                                            ...errors,
                                            ["name"]: null
                                            });
                                        setName(ev.target.value);
                                    }}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.name}
                                </Form.Control.Feedback>                                    
                            </Col>                                                      
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <Col sm="12">
                                <Form.Label htmlFor="surname">Cognome</Form.Label>
                                <Form.Control type="text"
                                    id="surname"
                                    className="form-control"
                                    value={surname}
                                    placeholder="Cognome"
                                    style={{marginBottom: "10px", maxHeight: "40px", borderRadius: "0px"}}
                                    onChange={(ev) => {
                                        if (!!errors["surname"]) setErrors({
                                            ...errors,
                                            ["surname"]: null
                                            });
                                        setSurname(ev.target.value);
                                    }}
                                    isInvalid={!!errors.surname}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.surname}
                                </Form.Control.Feedback>                                    
                            </Col>                                                      
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <Col sm="12">
                                <Form.Label htmlFor="email">E-mail</Form.Label>
                                <Form.Control type="text"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    placeholder="E-mail"
                                    style={{marginBottom: "10px", maxHeight: "40px", borderRadius: "0px"}}
                                    onChange={(ev) => {
                                        if (!!errors["email"]) setErrors({
                                            ...errors,
                                            ["email"]: null
                                            });
                                        setEmail(ev.target.value);
                                    }}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Col>                                                                                                     
                        </FormGroup>                                                
                        <FormGroup as={Row} className="mb-3">
                            <Col sm="12">
                                <Form.Label htmlFor="cellphone">Telefono</Form.Label>
                                <Form.Control type="text"
                                    id="cellphone"
                                    className="form-control"
                                    value={cellphone}
                                    placeholder="Telefono"
                                    style={{marginBottom: "10px", maxHeight: "40px", borderRadius: "0px"}}
                                    onChange={(ev) => {
                                        if (!!errors["cellphone"]) setErrors({
                                            ...errors,
                                            ["cellphone"]: null
                                            });
                                        setCellphone(ev.target.value);
                                    }}
                                    isInvalid={!!errors.cellphone}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.cellphone}
                                </Form.Control.Feedback>
                            </Col>                                                                                                      
                        </FormGroup>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                            className="btn btn-danger no-radius"
                            onClick={(event) => {
                                event.preventDefault();
                                props.handleNewContactModalHide();
                            }}>
                        ANNULLA
                    </Button>
                    <Button variant="primary"
                            className="btn btn-success no-radius"
                            type="submit">
                        SALVA
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );        
};

export default ContactModal;