import React from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/actions/contacts';

function InputBlock({ onSave }) {

  const dispatch = useDispatch();

  function  onFormSubmit(e) {
      e.preventDefault();

      dispatch(createUser({
        name: e.target.name.value,
        surname: e.target.surname.value,
        email: e.target.email.value,
        })
    );
      e.target.reset();

  }

  return (
  <form onSubmit={onFormSubmit}>
    <input name='name' placeholder="contact name"/>
    <input name='surname' placeholder="contact surname"/>
    <input name='email' placeholder="contact email"/>
    <button>Save</button>
  </form>  
  )
}

export default InputBlock



