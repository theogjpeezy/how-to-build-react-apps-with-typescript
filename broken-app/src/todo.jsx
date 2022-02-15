import React from "react";
import { CompleteButton } from "./completeButton";
import { Card, CardTitle, CardBody } from "reactstrap";

export const Todo = (props) => {
  const textDecoration = props.completed ? "line-through" : "";

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <p style={{ textDecoration }}>{props.title}</p>
        </CardTitle>
        <CompleteButton
          completeTodo={() => props.completeTodo(props.title)}
          completed={props.completed}
        />
      </CardBody>
    </Card>
  );
};
