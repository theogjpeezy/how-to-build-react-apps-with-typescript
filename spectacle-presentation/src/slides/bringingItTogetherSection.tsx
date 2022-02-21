import React from 'react';
import { Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';


export const BringingItTogetherSection: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'Bringing it Together'} subHeading={'React with TypeScript'}>
    <Notes> 
      Okay, now that we have the basics down, lets bring it together and start using react with typescript.      
    </Notes>
  </SectionSlide>
}