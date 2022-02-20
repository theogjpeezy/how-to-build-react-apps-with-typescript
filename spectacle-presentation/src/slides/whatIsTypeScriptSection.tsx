import React from 'react';
import { Heading, Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const WhatIsTypeScriptSection: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'What is TypeScript?'}>
    <Heading>How can it help us in React?</Heading>
    <Notes> </Notes>
  </SectionSlide>;
}