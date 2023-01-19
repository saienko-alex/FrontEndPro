
import './App.css';

import { Component } from 'react';
import InputBlock from './InputBlock/InputBlock';
import ContactList from './ContactList/ContactList';
import HeaderBlock from './HeaderBlock/HeaderBlock';


class App extends Component {

  state = {
    contactList: [
      {id: 1, name: 'Bob', surname: 'Charger', email: 'bob@gmail.com'},
      {id: 2, name: 'Boris', surname: 'Charger', email: 'boris@gmail.com'},
      {id: 3, name: 'John', surname: 'Charger', email: 'john@gmail.com'},
    ],
  }

  deleteContactList = (id) => {
      this.setState({
        contactList: this.state.contactList.filter((item) => item.id !== id),
      });
  }

  createContactList = (newContact) => {
    this.setState({
      contactList: [
          ...this.state.contactList, 
          {
          ...newContact, 
          id: Date.now(),
        },
      ]
    })
  }

  
    render () {
      return (
        <>
          <HeaderBlock />
          <ContactList contactList = {this.state.contactList} onDelete = {this.deleteContactList}/>
          <InputBlock onSave = {this.createContactList}/>
        </>
      )
    }
}


export default App;




