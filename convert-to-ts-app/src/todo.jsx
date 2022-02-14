import React from 'react';
import PropTypes from 'prop-types';
import { CompleteButton } from './completeButton';
import { Card, CardTitle, CardBody } from 'reactstrap';

const Todo = props => {
    const textDecoration = props.completed ? 'line-through' : '';
    return <Card><CardBody>
        <CardTitle><p style={{textDecoration}}>{props.title}</p></CardTitle>
        <CompleteButton completeTodo={() => props.completeTodo(props.title)} completed={props.completed} />
    </CardBody></Card>
};

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export {
    Todo
};