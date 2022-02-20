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
    <Notes> </Notes>
  </SlideWithHeader>;
}