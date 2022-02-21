import React from "react";
import { Button } from "reactstrap";

/*
export interface ICompleteButtonProps {
  completed: boolean;
  completeTodo: () => void;
}
*/

export const CompleteButton = (props) => (
  <Button disabled={props.complete} onClick={props.completeTodo}>
    Complete
  </Button>
);
