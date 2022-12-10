
import { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

export default class ContactList extends Component {

  
    render () {
      return (
            <tbody>
                    {this.props.contactList.map((item) => (
                        <ContactListItem key = {item.id} contacts = {item} onDelete = {this.props.onDelete} />
                    ))}    
            </tbody>
        );
    }
}
