import React from 'react';
import { Heading, Notes, Text } from 'spectacle';
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
    <Notes> 
      We are going to touch on this real quick, just in case you need to get out of the TypeScript compiler.  There are two types built in.  any and unknown.
      Any is essentially saying that a value could be anything.  Type checking will not be run on this value in any manner.
      Unknown is the opposite.  This is saying we have no clue what this is and you need to cast it most likely to something we do know in order to use it in any functional way.  
    </Notes> 
  </SlideWithHeader>;
}