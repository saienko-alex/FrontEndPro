import React from 'react'
import ContactListItem from './ContactListItem'
import HeaderBlock from './HeaderBlock'

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <>
    <HeaderBlock />
    <tbody>
        {contacts.map((item) => (
            <ContactListItem key = {item.id} contact={item} onDelete={onDelete} onEdit={onEdit}/>
        ))}
    </tbody>
    </>  
  )
}

export default ContactList


