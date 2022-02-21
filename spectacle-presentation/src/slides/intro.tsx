import React from 'react';
import { Heading, Notes } from 'spectacle'
import { BlankSlide } from '../template/baseSlide';

export const IntroSlide: React.FunctionComponent = () => <BlankSlide>
  <Heading textAlign={'left'} fontSize={'h1'} color={'ceCharcoal'}>How To Build React Apps with TypeScript</Heading>
  
  <Heading fontSize={'h3'} margin={'15vh 0 0 0'} textAlign={'right'} color={'ceCharcoal'}>
    Justin Cronin<br/>
    Solutions Architect <br/>
    jcronin@clearedgeit.com
  </Heading>        
  <Notes>
    Hello, my name is Justin Cronin.  
    I am a Solutions Architect here at ClearEdge.
    Today we will be talking about building React Apps with TypeScript  
  </Notes>
</BlankSlide>