class Contact {

    constructor(id, name, surname, email, cellphone) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.cellphone = cellphone;
    } 
  
    static from(json) {
      const contact = new Contact();
      Object.assign(contact, json);
      return contact;
    }
  
  }
  
  export default Contact;