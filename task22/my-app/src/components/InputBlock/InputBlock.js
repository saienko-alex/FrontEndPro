
import { Component } from 'react';

export default class InputBlock extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
          name: e.target.elements.name.value,
          surname: e.target.elements.surname.value,
          email: e.target.elements.email.value,
        })

        e.target.reset();

    }
  
    render () {
      return (
              <form onSubmit = {this.onFormSubmit}>
                <input name='name' placeholder="contact name"/>
                <input name='surname' placeholder="contact surname"/>
                <input name='email' placeholder="contact email"/>
                <button>Save</button>
              </form>  
      )
    }
}



