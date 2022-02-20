import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

export const WhatIsTypeScript = () => {
  return <SlideWithHeader>
    <Grid gridTemplateColumns={'auto auto'}>
      <UnorderedList>
        <ListItem>It is a superset of Javascript​ that leverages strong types</ListItem>
        <ListItem>It has a transpiler (much like babel) that will transpile your application logic into a known ES standard to ensure browser support​</ListItem>
        <ListItem>It is a compiler in the idea of a type checker.  It will evaluate the types in the application and ensure everything is written to work together​</ListItem>
        <ListItem>It is a way to both explicitly and implicitly describe what you are working with at any given time</ListItem>
      </UnorderedList>
      <Image src={'images/ts-diagram.png'} />
    </Grid>
    <Notes> </Notes>
  </SlideWithHeader>;
}

//What is TypeScript?
/*
*/