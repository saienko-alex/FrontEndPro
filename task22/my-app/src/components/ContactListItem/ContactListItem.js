import './Contactlist.css'
import { Component } from 'react';

export default class ContactListItem extends Component {

    onListDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.contacts.id);
    };

    render () {
      return <tr>
            <td className='td'>{this.props.contacts.name}</td>
            <td className='td'>{this.props.contacts.surname}</td>
            <td className='td'>{this.props.contacts.email}</td>
            <td className='td'>
                <button onClick = {this.onListDeleteClick}>X</button>
            </td>  
        </tr>;
    }
}