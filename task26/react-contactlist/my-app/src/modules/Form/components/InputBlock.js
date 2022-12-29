import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useContactsBook from '../../common/hooks/useContactsBook';

function InputBlock({ onSave, currentContact }) {
  const navigate = useNavigate();

  const {contactID} = useParams();
  const { contactList, changeContact } = useContactsBook(contactID);



  function  onFormSubmit(e) {
      e.preventDefault();

      onSave({
        id: e.target.id.value,
        name: e.target.name.value,
        surname: e.target.surname.value,
        email: e.target.email.value,
      }).then(() => navigate('..'))

      e.target.reset();
      

  }

  return (
  <form onSubmit={onFormSubmit}>
    <input name='name' defaultValue={currentContact.name} placeholder="contact name"/>
    <input name='surname' defaultValue={currentContact.surname} placeholder="contact surname"/>
    <input name='email' defaultValue={currentContact.email} placeholder="contact email"/>
    <input name='id' defaultValue={currentContact.id} type='hidden'/>
    <button>Save</button>
  </form>  
  )
}

export default InputBlock


