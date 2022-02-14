import React, { useState } from 'react';
import { Button, FormGroup, Input, Label, Form, Col, Row } from 'reactstrap';

export const TodoInput = (props) => {
    const [todoName, setTodoName] = useState("");
    const onClick = () => {
        props.addTodo({title: todoName, completed: false});
        setTodoName("");
    }

    return <Form>
        <FormGroup>
            <Row>
            <Label xs={{offset: 2, size: 2 }} for="todo-input">Enter Todo: </Label>
            <Col xs={6}>
                <Input type="text" name="todo-input" id="todo-input" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
            </Col>
            <Col xs={1}>
                <Button onClick={onClick}>Add</Button>
            </Col>
            </Row>
        </FormGroup>
    </Form>
}
