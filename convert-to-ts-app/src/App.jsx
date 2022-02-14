import './App.css';
import { useState } from 'react';
import { TodoInput } from './todoInput';
import { TodoCardGrid } from './todoCardGrid'
import { Container, } from "reactstrap";
import { chunk } from 'lodash';


const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  };
  const completeTodo = (todoName) => 
    setTodos(todos.map(todo => {
      if (todo.title !== todoName) return todo;
      return {
        ...todo,
        completed: true
      };
    })
  );

  const todoChunks = chunk(todos, 3);

  return <div className={"App"}>
    <div className={"App-header"}>
      Todo List
    </div>
    <div className={"App-logo"}>
      <Container>
        <TodoInput addTodo={addTodo} />
        <TodoCardGrid todos={todos} completeTodo={completeTodo} />
      </Container>
    </div>
  </div>
}

export default App;