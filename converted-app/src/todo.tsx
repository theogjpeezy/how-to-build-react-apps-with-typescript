import React from "react";
import { CompleteButton } from "./completeButton";
import { Card, CardTitle, CardBody } from "reactstrap";

export interface ITodoProps {
  title: string;
  completeTodo: (title: string) => void;
  completed: boolean;
}

export const Todo = ({ completed, completeTodo, title }: ITodoProps) => {
  const textDecoration = completed ? "line-through" : "";
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <p style={{ textDecoration }}>{title}</p>
        </CardTitle>
        <CompleteButton
          completeTodo={() => completeTodo(title)}
          completed={completed}
        />
      </CardBody>
    </Card>
  );
};
