import React from 'react';
import { Box, CodePane, Heading, Notes, Slide, Text } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const AnyAndUnknown: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle='any and unknown types'>
    <Heading fontSize={'h3'} textAlign={'left'}>any</Heading>
    <Text fontSize={'secondaryList'}> 
      {`
        Declares that the value has any type, so it could have any shape. 
        You are essentially telling TypeScript you understand what the shape is
        and do not need any compile time checks for it.
      `}
    </Text>
    <Heading fontSize={'h3'} textAlign={'left'}>unknown</Heading>
    <Text fontSize={'secondaryList'}>
      {`
        This is a newish type to TypeScript.  This literally means we have no clue
        what we are working with.  For this value to be used in any relevant way
        we will likely need to cast it to something else.  Unlike any, we now need
        to be explicity about the type we are using, rather than implicit.
      `}
    </Text>
    <Notes> </Notes> 
  </SlideWithHeader>;
}