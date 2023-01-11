import React from 'react'
import './Contactlist.css'
import { deleteUser } from '../../store/actions/contacts';
import { useDispatch } from 'react-redux';

function ContactListItem({ contact }) {
  const dispatch = useDispatch();

    function onDeleteClick(e) {
        dispatch(deleteUser(contact.id));
    }
  return (
        <tr>
            <td className='td'>{contact.name}</td>
            <td className='td'>{contact.surname}</td>
            <td className='td'>{contact.email}</td>
            <td className='td'>
                <button onClick={onDeleteClick}>X</button>
            </td>  
        </tr>
  )
}

export default ContactListItem







