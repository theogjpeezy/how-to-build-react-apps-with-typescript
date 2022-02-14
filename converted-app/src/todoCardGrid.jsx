import React from 'react';
import { chunk } from 'lodash';
import { Row, Col } from 'reactstrap';
import { Todo } from './todo';

export const TodoCardGrid = props => {
    const chunkSize = props.chunkSize ?? 4;
    const chunks = chunk(props.todos, chunkSize);

    return chunks.map((todoChunk) => 
        <Row className={"todo-card-row"}>
            {todoChunk.map((todo, i) => <Col xs={12/chunkSize}>
                <Todo title={todo.title} completed={todo.completed} completeTodo={props.completeTodo} key={i} />
            </Col>)}
        </Row>
    );
}