import React from 'react';
import { ListItem, UnorderedList, Text } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const ReactJSShortComings: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'React with JavaScript Pain Points'}>
    <Text fontSize={'list'}>While TypeScript addresses many pain points, we are going to touch on two:</Text>
    <UnorderedList fontSize={'list'}>
      <ListItem>Props passed into a component are not typed</ListItem>
      <UnorderedList fontSize={'secondaryList'}>
        <ListItem>User's are not informed what props to pass</ListItem>
        <ListItem>User's might have to evaluate implementation at runtime</ListItem>
        <ListItem>Refactors do not communicate scope</ListItem>
      </UnorderedList>
      <ListItem>State values are not typed</ListItem>
      <UnorderedList fontSize={'secondaryList'}>
        <ListItem>Makes it unclear what a state value's type is</ListItem>
        <ListItem>Makes it unclear what value the set function is supposed to take</ListItem>
        <ListItem>Makes it very difficult to trace when passing the set function around</ListItem>
      </UnorderedList>
    </UnorderedList>
  </SlideWithHeader>
}