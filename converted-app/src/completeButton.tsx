import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const CompleteButton = props => <Button disabled={props.completed} onClick={props.completeTodo}>Complete</Button>;

CompleteButton.propTypes = {
    completeTodo: PropTypes.func.isRequired
};

export {
    CompleteButton
}