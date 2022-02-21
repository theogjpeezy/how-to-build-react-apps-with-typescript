import React from 'react';
import { ListItem, UnorderedList, Text, Notes } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const ReactJSShortComings: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'React with JavaScript Pain Points'}>
    <Text fontSize={'list'}>While TypeScript addresses many pain points, we are going to touch on two:</Text>
    <UnorderedList fontSize={'list'}>
      <ListItem>Props passed into a component are not typed</ListItem>
      <UnorderedList fontSize={'secondaryList'}>
        <ListItem>Users are not informed what props to pass</ListItem>
        <ListItem>Users might have to evaluate implementation at runtime</ListItem>
        <ListItem>Refactors do not communicate scope</ListItem>
      </UnorderedList>
      <ListItem>State values are not typed</ListItem>
      <UnorderedList fontSize={'secondaryList'}>
        <ListItem>Makes it unclear what a state value's type is</ListItem>
        <ListItem>Makes it unclear what value the set function is supposed to take</ListItem>
        <ListItem>Makes it very difficult to trace when passing the set function around</ListItem>
      </UnorderedList>
    </UnorderedList>
    <Notes>
      If we remember back to our initial run through of react.  The props object that is passed into our function is not typed.  When we declare a state variable, that is not typed either.  
      This can be extermely problematic to consumers.  You might be given a component and need to provide it with the appropriate props.  In order to figure that out you would have to 
      ask the developer, refer to external documentation, or just do trial and error.  
      This process can lead to frustration overall.  In team environments it can lead to bugs as well.  Required props are not given in certain scenarios, a downstream component sets a state value
      to null instead of the expected object.  
      There are more pain points, especially as you start exploring the React ecosystem, but I think these two capture the most common pains.
    </Notes>
  </SlideWithHeader>
}