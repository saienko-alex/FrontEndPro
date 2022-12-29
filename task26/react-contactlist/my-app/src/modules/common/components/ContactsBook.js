
import ContactList from '../../ContactList/components/ContactList';
import InputBlock from '../../Form/components/InputBlock';
import { useState } from 'react';
import Navigation from './Navigation';
import useContactsBook from '../hooks/useContactsBook';
import { Route, Routes, Navigate } from 'react-router-dom'


function ContactsBook() {
  const { contactList, currentContact, deleteContact, editContact, onSave } = useContactsBook();
  const [page, setPage] = useState('contactlist')

  return (
    <>
      <Navigation page = {page} navigate={setPage}/>
      <Routes>
        <Route path='/contactlist' element={<ContactList contacts={contactList} onDelete={deleteContact} onEdit={editContact}/>} />
        <Route path='/inputblock' element={<InputBlock onSave = {onSave} currentContact={currentContact} />} />
        <Route path='/' exact element={<Navigate to={<ContactList />}/>} />
      </Routes>
    </>
  );
}

export default ContactsBook
