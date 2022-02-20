import React from 'react';
import { Heading, Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const ConvertingExisting: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'Converting an Existing React App'}>
    <Heading textAlign={'left'} fontSize={'h3'} padding={'0 10hw 0 0'}>Adopting Gradually</Heading>
    <Notes> </Notes>
  </SectionSlide>;
}