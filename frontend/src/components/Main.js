import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { Row } from 'react-bootstrap/';

import LoginForm from './LoginForm';
import Home from './Home';
import API from '../api/API';

import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [errorLoginShow, setErrorLoginShow] = useState(false);
    const [errorLoginMessage, setErrorLoginMessage] = useState('');

    const [user, setUser] = useState({});
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dirty, setDirty] = useState(false);

    useEffect(()=> {
      if(loggedIn === true) {
        const getContacts = async () => {
          const contacts = await API.getAllContacts(user);
          setContactList(contacts);
          setLoading(false);
        };

        getContacts()
        .catch(err => {
          console.error(err);
        });
      }
    }, [loggedIn]);

    useEffect(()=> {
      const getContacts = async () => {
        const contacts = await API.getAllContacts(user);
        setContactList(contacts);
      };
      if(contactList.length && dirty) {
        getContacts().then(() => {
          setDirty(false);
        }).catch(err => {
          console.error(err);
        });
      }
    }, [contactList.length, dirty]);  

    /**** Function to handle user login process ****/
    const doLogIn = async (credentials) => {
        try {
          setErrorLoginShow(false);
          setErrorLoginMessage('');

          const userObj = await API.logIn(credentials);
          if (userObj) {
            setUser(userObj);
            setLoggedIn(true);
          } else {
            setErrorLoginShow(true);
            setErrorLoginMessage('Username e/o password non validi.');
          }
        }
        catch (err) {
          setErrorLoginShow(true);
          setErrorLoginMessage('Si è verificato un errore inatteso');
        }
      }
    
    /**** Function to handle user logout process ****/
      const doLogOut = async () => {
          setLoggedIn(false);
          setErrorLoginShow(false);
          setErrorLoginMessage('');
          setUser({});
          setContactList([]);
      }
      
      /**** Function to handle contact insert process ****/
      const insertNewContact = async (contact) => {
        try {
          const response = await API.insertNewContact(user, contact);
          contact.status = 'added';
          setDirty(true);
          setContactList(contactList => [...contactList, contact]);
        } catch(err) {
            console.log(err);
        }
      }; 

      /**** Function to handle contact remove process ****/
      const deleteContact = async (id) => {
        try {
          const response = await API.deleteContact(user, id);
          setDirty(true);
          setContactList(oldContactList => {
            return oldContactList.map(contact => {
              if (contact.id === id)
                return {...contact, status: 'deleted'};
              else
                return contact;
            });            
          });
        } catch(err) {
            console.log(err);
        }
      };      

    return (
        <Routes>
            <Route exact path="/login" element={
              <Row>
                {loggedIn ?  <Navigate to="/" replace={true} />  : 
                <LoginForm 
                  login={doLogIn} 
                  errorShow={errorLoginShow} 
                  errorMessage={errorLoginMessage} />
                }
              </Row>} />
            <Route exact path="/" element={
              <Row>
                {loggedIn ? 
                  <Home 
                    logout={doLogOut} 
                    user={user} 
                    contactList={contactList} 
                    loading={loading} 
                    handleNewContactInsert={insertNewContact} 
                    handleContactDelete={deleteContact} /> : 
                  <Navigate to="/login" replace={true} />
                }
              </Row>} />
        </Routes>          
    );
}

export default Main;