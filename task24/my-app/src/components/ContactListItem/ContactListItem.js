import React from 'react'
import './Contactlist.css'

function ContactListItem({ contact, onDelete }) {
  return (
        <tr>
            <td className='td'>{contact.name}</td>
            <td className='td'>{contact.surname}</td>
            <td className='td'>{contact.email}</td>
            <td className='td'>
                <button onClick={() => onDelete(contact.id)}>X</button>
            </td>  
        </tr>
  )
}

export default ContactListItem





