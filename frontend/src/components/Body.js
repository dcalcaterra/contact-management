import { React, useState } from 'react';
import { Button, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import ContactTable from './ContactTable';
import ContactModal from './ContactModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-custom.css';
import '../css/menu-blu.css';

function Body(props) {
    const [modalShow, setModalShow] = useState(false);   

    const handleNewContactModalShow = e => {
        e.preventDefault();
        setModalShow(true);
    }

    const handleNewContactModalHide = () => {
        setModalShow(false);
    }

    const handleNewContactInsert = (contact) => {
        setModalShow(false);
        props.handleNewContactInsert(contact);       
    }  

    return (
        <div className="widewrapper weak-highlight page">
            <div className="col-lg-12" style={{ paddingTop: "10px" }}>
                <div className="panel panel-dark-blu no-radius" style={{ marginBottom: "5px" }}>
                    <div className="panel-heading no-radius">
                        <h3 className="panel-title"><FontAwesomeIcon icon={faAddressBook} /> Lista Contatti</h3>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel-body">
                    {props.loading ? <span><strong>🕗 Caricamento dei contatti in corso... 🕗</strong></span> :
                    ((props.contactList && props.contactList.length > 0) ?
                        <div> 
                            <Row>
                                <ContactTable contacts={props.contactList} 
                                              handleContactDelete={props.handleContactDelete} />
                            </Row>
                        </div>                            
                        : console.log("Non ci sono contatti da mostrare")                        
                        )}
                        <Button variant="primary"
                            className="btn btn-success no-radius"
                            onClick={handleNewContactModalShow}>
                            AGGIUNGI
                        </Button>                         
                </div>
            <ContactModal 
                modalShow={modalShow}                
                handleNewContactModalHide={handleNewContactModalHide}
                handleNewContactInsert={handleNewContactInsert}
            />
        </div>      
    </div>
    );
};

export default Body;