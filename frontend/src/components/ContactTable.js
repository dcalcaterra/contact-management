import { React } from 'react';
import { Button, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ContactTable(props) {

    const selectStatusClass = (contact) => {
        let statusClass = null;
            
        switch(contact.status) {
            case 'added':
            statusClass = 'table-success';
            break;
            case 'deleted':
            statusClass = 'table-danger';
            break;
            default:
            break;
        }
        return statusClass;      
    };

    return (<>
            <div className="panel panel-heading">
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>E-mail</th>
                            <th>Telefono</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.contacts.map((contact) => 
                            <tr key={contact.id} 
                                className={selectStatusClass(contact)}>
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.surname}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.cellphone}</td>                                
                                    <td>
                                        <Button size="xs" variant="danger">
                                            <FontAwesomeIcon 
                                                icon={faTrashAlt}
                                                size="1x" 
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    props.handleContactDelete(contact.id);
                                                }} 
                                            />
                                        </Button>                                    
                                    </td>
                            </tr>
                        )
                    }                        
                    </tbody>
                </Table>
            </div>
        </>);      
};

export default ContactTable;        