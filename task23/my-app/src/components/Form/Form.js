import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {

    state = {
        values: {
            title: '',
        },
        errors: {},
        isDirty: {},

    }

    onInputChange =(e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        }

        this.setState({
            values: values,
            errors: this.validate(values),
            isDirty: {
                ...this.state.isDirty,
                [e.target.name]: true,
            },
        });
        

    }
        
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.values);

        e.target.reset();
    };

    validate({title}) {
        const errors = {};

        if(title === '') {
            errors.title = 'Todo item is required';
        }

        return errors;
    }

    isValid() {
        return !Object.keys(this.state.errors).length;
    }


   


    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="title" value={this.state.values.title} onChange = {this.onInputChange}/>
                {this.state.isDirty.title && this.state.errors.title ? (
                    <div className='error'>
                        {this.state.errors.title}
                    </div>
                ) : null }
                <button disabled={!this.isValid()}>Save</button>
            </form>
        );
    }
}