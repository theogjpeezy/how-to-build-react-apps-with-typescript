import React from 'react';

export const StateAndProps = () => {
  return <div></div>;
}

//Props and State and the effects on rendering
/*
Any React Component will take in an object known as props that it can use to render itself or its child components
A React Component can also have its own internal state that it manages
The useState hook returns the current value of the property and a function to set the state property
A React Component will render when:
The component is executed again with DIFFERENT props
A state property value is changed via the given function
*/