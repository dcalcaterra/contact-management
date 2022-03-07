/**
 * All the API calls
 */

import Contact from '../models/Contact';

const BASEURL = '/API';

const createJwtAuthToken = function(jwtToken) {
  return 'Bearer ' + jwtToken;
}

async function logIn(credentials) {
  console.log(JSON.stringify(credentials));
  let response = await fetch(BASEURL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  });
  if(response.ok) {
    const result = await response.json();
    result.username = credentials.username;
    return result;
  }
  else {
    console.log('Errors...');
    try {
      const errDetail = await response.json();
      throw errDetail;
    }
    catch(err) {
      throw err;
    }
  }
}

async function getAllContacts(user) {
  //GET /API/contacts/
  const jwtAuthToken = createJwtAuthToken(user.jwtToken);
  const response = await fetch(BASEURL + '/contacts/', {
                                headers: {
                                  "Authorization": `${jwtAuthToken}`
                                }
                              });
  const contactJson = await response.json();
  if (response.ok) {
    return contactJson.map((contact) => Contact.from(contact));
  } else {
    throw contactJson;
  }
}

async function insertNewContact(user, contact) {
  // POST /API/contacts/
  const jwtAuthToken = createJwtAuthToken(user.jwtToken);  
  const response = await fetch(BASEURL + '/contacts/', {
                                method: 'POST',
                                headers: {
                                  "Authorization": `${jwtAuthToken}`,                                  
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(contact),                            
                              });
  if (response.ok) {
    return {};
  } else {
    const json = await response.json();
    throw json;
  }
}

async function deleteContact(user, id) {
  // DELETE /API/contacts/:id
  const jwtAuthToken = createJwtAuthToken(user.jwtToken);  
  const response = await fetch(BASEURL + '/contacts/' + id, {
                                method: 'DELETE',
                                headers: {
                                  "Authorization": `${jwtAuthToken}`,                                  
                                  'Content-Type': 'application/json'
                                }                            
                              });
  if (response.ok) {
    return {};
  } else {
    const json = await response.json();
    throw json;
  }
}

const API = { logIn, getAllContacts, insertNewContact, deleteContact };
export default API;
