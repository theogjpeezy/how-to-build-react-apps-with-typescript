import React from 'react';
import { Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const TypeSection: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'Types'} subHeading={'How to write them and how to use them'}>
    <Notes> Enough talking about it, let's look at some of these types and how to use them </Notes>
  </SectionSlide>
}