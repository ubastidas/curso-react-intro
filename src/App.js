import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';


const defaultTodos = [
  {
    text: 'Todo 1',
    completed: true,
  },
  {
    text: 'Cursar react 2',
    completed: false,
  },
  {
    text: 'Otra tarea 3',
    completed: true,
  },
  {
    text: 'Vainas 4',
    completed: false,
  },
];


function App() {
  return (
    <>      
      <TodoCounter completed={ 12 } total={ 15 } />
      <TodoSearch />
      
      <TodoList>
      { defaultTodos.map( todo => (
          <TodoItem 
            key={ todo.text } 
            text={ todo.text } 
            completed={ todo.completed } 
          />
        ))}
      </TodoList>      
      <TodoCreateButton />
    </>
  );
}

export default App;
