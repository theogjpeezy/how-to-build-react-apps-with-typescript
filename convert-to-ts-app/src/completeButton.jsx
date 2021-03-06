import React from "react";
import { Button } from "reactstrap";

export const CompleteButton = (props) => (
  <Button disabled={props.completed} onClick={props.completeTodo}>
    Complete
  </Button>
);
