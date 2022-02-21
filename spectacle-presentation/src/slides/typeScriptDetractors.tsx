import React from 'react';
import { ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const TypeScriptDetractors = () => {
  return <SlideWithHeader slideTitle={'TypeScript Detractors'}>
    <UnorderedList fontSize={'list'}>
      <ListItem>You will need to type more to describe your types</ListItem>
      <ListItem>You might need to do fix more before getting to the browser</ListItem>
      <ListItem>You might need to provide more structure to your application</ListItem>
    </UnorderedList>
    <Notes> 
      I don't want to sell this like you get all of this benefit without a cost.  That would be unfair.   There are some detractors to adopting TypeScript to your application, however,
      I personally feel that they pale into comparisons to the benefits.  You will need to be more verbose since you need to describe types.  This means more typing.  I would argue that you
      need to document anyway, so its cancels out, however, if you don't like documenting at all then that's not really fair.  If you have compile time issues that might mean you don't get to test
      in the browser as quickly.  I feel that you are going to be finding those errors in the browser anyway, but I've heard developers state that getting it running is preferable.  You will also need
      to think about the structure of the application more.  If you are putting out a new type that will be used across the application, you are building a contract for those that use it.  Granted,
      this happens regardless since the structure is still there at runtime, it goes back to getting it out the door to the browser.
      Personally, if you are working on a team I think TypeScript is a no brainer.  It helps people communicate as they work and helps drive code review conversation as well.
      If you are a one person shop and you don't need the added structure, it might not be for you.  Personally, I need the structure or I get lost in debugging land.
    </Notes>
  </SlideWithHeader>
}