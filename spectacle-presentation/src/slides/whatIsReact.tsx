import React from 'react';
import { CodeSpan, ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const WhatisReact: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'What is React?'}>
    <UnorderedList fontSize={'secondaryList'}>
      <ListItem>A front end framework focused on creating interactive user interfaces both for the web and native environments</ListItem>
      <ListItem>Leverages an encapsulated component-based approach to isolate behavior and combat overly complex systems</ListItem>
      <ListItem>Other frameworks, such as Vue.js or Angular tends towards Model, View, View Model (MVVM) or Model, View, Controller (MVC) architecture patterns, while React by itself doesn’t push towards any one of those necessarily</ListItem>
      <ListItem>Since version 16, there has been a heavy push towards functional practices, focusing mainly on Pure Functions.  </ListItem>
      <ListItem>A Pure Function is a function that will always give the same output when given the same input (i.e. f(x) = x + 2)</ListItem>
      <ListItem>Most of the performance gains of React are gained from memoization</ListItem>
      <ListItem>Memoization is essentially caching of results to avoid repeat function invocations</ListItem>
      <ListItem>Referential equality vs value equality <CodeSpan fontSize={'list'}>[1] !== [1]</CodeSpan> but <CodeSpan fontSize={'list'}>1 === 1</CodeSpan></ListItem>
    </UnorderedList>
    <Notes> 
      React is a front end framework focused on creating responsive UIs for both web and native environments.  This talk will only cover the web aspect, but you can borrow just about all of this in native as well. 
      React focuses on having each component encapsulated so you have a one stop shop for each component in the app.  Other frameworks such as Angular elect to split up service style work, presentation, and model definitions into separate 
      files and modules.  React doesn't necessarily prescribe a paradigm like MVVM or MVC.  It allows you to decide which avenue will work best for you to meet the spirit of the project.  When React was first conceived, it focused on Class Components.
      Components were ES6 style classes that inherited from base classes in the React library.  However, starting in late version 16, there was a large push to use functional components over class components.  
      One of the biggest confusion points is how React knows to render and re-render.  The documentation mainly says if something "changes", but why is that and what does it mean?  React's rendering engine is based heavily upon
      memoization.  Memoization is a way to cache results to avoid redundant firing of logic.  An example would be if we a function that added two numbers, a and b, I call that function once with 1 and 1.  We get a result of 2.  The next time 
      I call add, if I give it 1 and 1 again, we have that answer already so we can just hand back the same result rather than calculating again. React uses this to determine if a component needs to re-render or not.
      Last thing here.  When we talk in equality, we are speaking of referential equality for objects, not value equality.  Native types such as numbers, booleans, strings will always be compared on value based equality.  Things like objects and arrays
      will be based on reference, that is if they are not they same allocation then they are not equal.
    </Notes>
  </SlideWithHeader>
};