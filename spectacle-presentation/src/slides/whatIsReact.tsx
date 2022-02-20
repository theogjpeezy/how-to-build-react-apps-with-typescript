import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

/*

*/

export const WhatisReact: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'What is React?'}>
    <UnorderedList>
      <ListItem>A front end framework focused on creating interactive user interfaces both for the web and native environments</ListItem>
      <ListItem>Leverages an encapsulated component-based approach to isolate behavior and combat overly complex systems</ListItem>
      <ListItem>Other frameworks, such as Vue.js or Angular tends towards MVVM or MVC architecture patterns, while React by itself doesn’t push towards any one of those necessarily</ListItem>
      <ListItem>Since version 16, there has been a heavy push towards functional practices, focusing mainly on Pure Functions.  </ListItem>
      <ListItem>A Pure Function is a function that will always give the same output when given the same input (i.e. f(x) = x + 2)</ListItem>
    </UnorderedList>
    <Notes> </Notes>
  </SlideWithHeader>
};