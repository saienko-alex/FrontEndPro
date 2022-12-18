import React from 'react'

function InputBlock({ onSave }) {
  function  onFormSubmit(e) {
      e.preventDefault();

      onSave({
        name: e.target.name.value,
        surname: e.target.surname.value,
        email: e.target.email.value,
      })

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


