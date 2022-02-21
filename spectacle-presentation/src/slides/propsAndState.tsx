import React from 'react';
import { ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const StateAndProps: React.FunctionComponent = () => {
    return <SlideWithHeader slideTitle={'Props and State and the Effects on Rendering'}>
      <UnorderedList fontSize={'list'}>
        <ListItem>Any React Component will take in an object known as props that it can use to render itself or its child components</ListItem>
        <ListItem>A React Component can also have its own internal state that it manages</ListItem>
        <ListItem>The useState hook returns the current value of the property and a function to set the state property</ListItem>
        <ListItem>A React Component will render when:</ListItem>
        <UnorderedList fontSize={'secondaryList'}>
          <ListItem>The component is executed again with DIFFERENT props</ListItem>
          <ListItem>A state property value is changed via the given function</ListItem>
        </UnorderedList>
      </UnorderedList>
      <Notes>
        As we have said, React will detect changes in the props object for a component to determine if it should re-render or not.  However, what if we need to have some sort of state for our component.
        Rather than having a global state out of the box, or having to register listeners all over the place, React's philosophy suggests that components should own their own state.  If multiple child components
        need to share that value, then we can move the state up the heirarchy and propogate it as props from there.  
        We can declare a components state by using the useState hook.  When we use this, will will initalize a state property for the component with a value.  The useState call will return us an array with two elements.
        The first is the state value and the second is a function that will allow us to set a new value for the property.  Unlike props, the state value will persist across renders as it lives in the context of the component, unlike
        props which is passed in as an input each time.  This now means we have 2 avenues for a rerender.  If the component function is called with different props and if state is updated using the provided function.  Please be aware,
        if you try to update state without using the provided function React will not know about it and your component will not rerender.
      </Notes>
    </SlideWithHeader>
}