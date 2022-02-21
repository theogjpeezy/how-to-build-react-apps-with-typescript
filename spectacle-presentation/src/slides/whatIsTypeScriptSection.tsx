import React from 'react';
import { Heading, Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const WhatIsTypeScriptSection: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'What is TypeScript?'}>
    <Notes> We've covered the basics of React, but what is TypeScript? </Notes>
  </SectionSlide>;
}