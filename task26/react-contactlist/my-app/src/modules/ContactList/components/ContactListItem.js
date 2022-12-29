import React from 'react'
import { NavLink } from 'react-router-dom';
import './Contactlist.css'

function ContactListItem({ contact, onDelete, onEdit }) {
  return (
        <tr>
            <td className='td'>{contact.name}</td>
            <td className='td'>{contact.surname}</td>
            <td className='td'>{contact.email}</td>
            <td className='td'>
                <button onClick={() => onDelete(contact.id)}>X</button>
                <NavLink to={'/inputblock/'}>
                  <button onClick={() => onEdit(contact.id)}>Edit</button>
                </NavLink> 
            </td>  
        </tr>
  )
}

export default ContactListItem







