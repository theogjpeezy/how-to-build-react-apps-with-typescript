import React from 'react';
import { Heading, Notes } from 'spectacle'
import { BlankSlide } from '../template/baseSlide';

export const IntroSlide = () => <BlankSlide>
  <Heading fontSize={'h1'} color={'ceCharcoal'}>How To Build React Apps with TypeScript</Heading>
  
  <Heading fontSize={'h3'} margin={'25vh 0 0 0'} textAlign={'right'} color={'ceCharcoal'}>
    Justin Cronin<br/>
    Solutions Architect <br/>
    jcronin@clearedgeit.com
  </Heading>        
  <Notes> </Notes>
</BlankSlide>