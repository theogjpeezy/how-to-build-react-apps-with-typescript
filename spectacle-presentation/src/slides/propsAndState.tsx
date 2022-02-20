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
      <Notes> </Notes>
    </SlideWithHeader>
}