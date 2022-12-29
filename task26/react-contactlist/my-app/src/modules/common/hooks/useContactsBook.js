import { useState, useEffect } from 'react';
import { createContactList, deleteContactList, getContactList, updateContactList } from '../../../services/contactSevices'


export default  function useContactsBook(id) {
    const [contactList, setcontactList] = useState([]);
    const [currentContact, setCurrentContact] = useState([]);

  
    useEffect(() => {
      getContactList().then(data => setcontactList(data))
    }, []);
  
    function deleteContact(id) {
      deleteContactList(id).then(() => {
        setcontactList(contactList.filter((item) => item.id !== id));
      });
    }
  
    function createContact(newContact) {
      createContactList({...newContact}).then(data => setcontactList([...contactList, data]))
    }
    function updateContact(newContact) {
      updateContactList(newContact).then(data =>{
        setcontactList(contactList.map(item => item.id === data.id ? data : item))
      })
    }
  
    function saveContact(contact) {
      if (contact.id) {
       return updateContact(contact);
      } else {
        return createContact(contact);
      }
    }
  
    function onSave(contact) {
      saveContact(contact);
      setCurrentContact({});
    }
  
    function editContact(id) {
      setCurrentContact(contactList.find((item) => item.id === id))
    }
    function changeContact(newContact) {
      setcontactList({...contactList, ...newContact})

    }

  return {
    contactList,
    currentContact, 
    deleteContact,
    editContact,
    onSave,
    changeContact
  }
    
    
}


