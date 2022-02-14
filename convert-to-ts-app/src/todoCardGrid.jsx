import React from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { Row, Col } from 'reactstrap';
import { Todo } from './todo';

const TodoCardGrid = props => {
    const chunkSize = props.chunkSize ?? 3;
    const chunks = chunk(props.todos, chunkSize);

    return chunks.map((todoChunk) => 
        <Row className={"todo-card-row"}>
            {todoChunk.map((todo, i) => <Col xs={4}><Todo title={todo.title} completed={todo.completed} completeTodo={props.completeTodo} key={i} /></Col>)}
        </Row>
    );
}

TodoCardGrid.propTypes = {
    chunkSize: PropTypes.number,
    todos: PropTypes.object
}

export {
    TodoCardGrid
}