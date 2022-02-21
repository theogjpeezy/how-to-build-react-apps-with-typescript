import { ListItem, Notes, UnorderedList } from "spectacle";
import { SlideWithHeader } from "../template/baseSlide";

export const WhatConstitutesReact = () => {
  return <SlideWithHeader slideTitle={'What constitutest a React App?'}>
    <UnorderedList fontSize={'list'}>
      <ListItem>A React app is simply a set of components that call one another to build a user interface</ListItem>
      <ListItem>A component is either a class or a function</ListItem>
      <ListItem>The push from React 16 forward has been towards functional components, so we will focus on them for this talk</ListItem>
      <ListItem>A functional component is a function that takes in props and returns JSX</ListItem>
      <ListItem>JSX is a syntax extension that allows html like syntax in JavaScript.  The goal is to bring the data and view together in one place.</ListItem>
    </UnorderedList>
    <Notes>As mentioned, all a React app is a set of components composed in a way to build a user interface. A function component is simply that, a function that returns a react component.  Instead of having all of the boilerplate that composingTypes
      with spinning up a new class, you can simply define a function that returns some JSX. This talk will focus on function components as the defacto standard for the most part. The function takes one argument, which is props.  
      Out of the box props does not have a schema, it is just an object with values on it.  We can use the values off of props to help render the component we are trying to mount, or pass them on to dependent children components.
      One of the most jarring ideas for new React developer is the idea of JSX.  This is JavaScript style code that looks like markup.  A lot of developers do not like the idea of co-mingling markup with application logic.  However,
      I've seen plenty of developer use it for a bit and realize how much they were jumping back and forth between files and how annoying it could be.  The philosophy of merging the two is a holy war for another talk, but if its 
      unsettling, give it a bit and don't fight the paradigm. While it does look like markup, all JSX is transpiled into JavaScript and shipped that way.  You don't actually ship JSX to the browser.
    </Notes>
  </SlideWithHeader>;
}