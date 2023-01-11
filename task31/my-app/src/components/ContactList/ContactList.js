import React from 'react'
import ContactListItem from '../ContactListItem/ContactListItem'
import { selectList } from '../../store/selectors/users';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(selectList);
  return (
    <tbody>
        {contacts.map((item) => (
            <ContactListItem key = {item.id} contact={item} />
        ))}
    </tbody>
  )
}

export default ContactList



