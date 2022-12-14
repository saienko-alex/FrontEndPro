
import './App.css';


import { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import Form from './Form/Form';
import { createTodos, deleteTodos, getTodos, updateTodos, } from '../services/usersService';

class App extends Component {

  state = {
    todoList: [],
  }
  toggleTodoList = (id) => {
    updateTodos(id).then(() => {
      this.setState({
        todoList: this.state.todoList.map((item) =>
            item.id !== id
                ? item
                : {
                      ...item,
                      isDone: !item.isDone,
                  }
        ),
      });
    });  
  };


  deleteTodoList = (id) => {
    deleteTodos(id).then(() => {
      this.setState({
        todoList: this.state.todoList.filter((item) => item.id !== id),
      });
    });
      
  }

  createTodoList = (newTodo) => {
    createTodos(newTodo).then((data) => {
      this.setState({
        todoList: [...this.state.todoList, data],
      }); 
    }); 
  }

  
    render () {
      return (
        <>
          <ToDoList todoList = {this.state.todoList} onDelete = {this.deleteTodoList} onToggle = {this.toggleTodoList}/>
          <Form onSave = {this.createTodoList}/>
        </>
      )
    }
    componentDidMount() {
      getTodos().then((data) =>
        this.setState({
          todoList: data,
        })
      );
      
    }

}


export default App;
