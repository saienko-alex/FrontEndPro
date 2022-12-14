
import React, { Component } from 'react';
import '../ToDoListItem/ToDoListItem.css';

export default class TodoListItem extends Component {
    onItemClick = () => {
        this.props.onToggle(this.props.todos.id);
    };

    onListDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.todos.id);
    };

    render () {
      return (
      <li className={'list' + (this.props.todos.isDone ? ' done' : '')} onClick={this.onItemClick}>
            {this.props.todos.title}
            <button onClick = {this.onListDeleteClick}>X</button>  
        </li>
        );
    }
}