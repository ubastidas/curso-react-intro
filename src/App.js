import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';

// const defaultTodos = [
//   {
//     text: 'Todo control ACCIÓN 1',
//     completed: false,
//   },
//   {
//     text: 'Cursar react 2',
//     completed: false,
//   },
//   {
//     text: 'Otra tarea 3',
//     completed: true,
//   },
//   {
//     text: 'Vainas 4',
//     completed: false,
//   },  
// ];


function App() {

  let parseTodos = (!localStorage.getItem('TODOS_V1') ? [] : JSON.parse(localStorage.getItem('TODOS_V1'))); 
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parseTodos);
  console.log(searchValue);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = ( newTodos ) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const todosFounded = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;    
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  return (
    <>      
      <TodoCounter completed={ completedTodos } total={ totalTodos } />
      <TodoSearch
        searchValue= { searchValue }
        setSearchValue={ setSearchValue }
      />
      
      <TodoList>
        {todosFounded.map( todo => (
          <TodoItem 
            key={ todo.text } 
            text={ todo.text } 
            completed={ todo.completed } 
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) }
          />
        ))}
      </TodoList>      
      <TodoCreateButton />
    </>
  );
}

export default App;
