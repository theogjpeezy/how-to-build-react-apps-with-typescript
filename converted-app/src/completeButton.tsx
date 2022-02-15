import React from "react";
import { Button } from "reactstrap";

export interface ICompleteButtonProps {
  completed: boolean;
  completeTodo: () => void;
}

export const CompleteButton = ({
  completed,
  completeTodo,
}: ICompleteButtonProps) => (
  <Button disabled={completed} onClick={completeTodo}>
    Complete
  </Button>
);
