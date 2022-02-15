import React from "react";
import { chunk } from "lodash";
import { Row, Col } from "reactstrap";
import { Todo } from "./todo";
import { ITodo } from "./ITodo";

export interface ITodoCardGridProps {
  todos: ITodo[];
  chunkSize?: number;
  completeTodo: (title: string) => void;
}

export const TodoCardGrid = ({
  todos,
  chunkSize = 3,
  completeTodo,
}: ITodoCardGridProps) => {
  const chunks = chunk(todos, chunkSize);

  return (
    <div>
      {chunks.map((todoChunk) => (
        <Row className={"todo-card-row"}>
          {todoChunk.map((todo, i) => (
            <Col xs={12 / chunkSize}>
              <Todo
                title={todo.title}
                completed={todo.completed}
                completeTodo={completeTodo}
                key={i}
              />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};
