import React from 'react'
import ContactListItem from '../ContactListItem/ContactListItem'

function ContactList({ contacts, onDelete }) {
  return (
    <tbody>
        {contacts.map((item) => (
            <ContactListItem key = {item.id} contact={item} onDelete={onDelete}/>
        ))}
    </tbody>
  )
}

export default ContactList


