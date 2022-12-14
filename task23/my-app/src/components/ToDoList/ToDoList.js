import { Component } from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';


export default class ToDoList extends Component {

  
    render () {
      return (
            <ul>
                {this.props.todoList.map((item) => (
                    <ToDoListItem 
                        key = {item.id} 
                        todos = {item}
                        onDelete = {this.props.onDelete}  
                        onToggle={this.props.onToggle}
                    />
                ))}    
            </ul>
        );
    }
}