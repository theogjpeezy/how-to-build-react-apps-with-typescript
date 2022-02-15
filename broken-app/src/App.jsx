import "./App.css";
import { useState } from "react";
import { TodoInput } from "./todoInput";
import { TodoCardGrid } from "./todoCardGrid";
import { Container } from "reactstrap";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const completeTodo = (todoName) =>
    setTodos(
      todos.map((todo) => {
        if (todo.title !== todoName) return todo;
        return {
          ...todo,
          completed: true,
        };
      })
    );

  return (
    <div className={"App"}>
      <div className={"App-header"}>Todo List</div>
      <div className={"App-logo"}>
        <Container>
          <TodoInput addTodo={setTodos} />
          <TodoCardGrid todos={todos} completeTodo={completeTodo} />
        </Container>
      </div>
    </div>
  );
};

export default App;
