
import ContactList from '../ContactList/ContactList';
import HeaderBlock from '../ContactList/components/HeaderBlock';
import InputBlock from '../Form/components/InputBlock';
import { useEffect, useState } from 'react';
import { createContactList, deleteContactList, getContactList } from '../../services/contactSevices';

function App() {
  const [contactList, setcontactList] = useState([]);

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

  
  return (
    <>
      <HeaderBlock />
      <ContactList contacts={contactList} onDelete={deleteContact}/>
      <InputBlock onSave = {createContact}/>
    </>
  )
}

export default App
