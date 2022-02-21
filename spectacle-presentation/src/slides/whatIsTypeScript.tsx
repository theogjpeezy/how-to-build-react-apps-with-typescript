import React from 'react';
import { Grid, ListItem, UnorderedList, Image, Notes } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const WhatIsTypeScript = () => {
  return <SlideWithHeader slideTitle={'What is TypeScript?'}>
    <Grid gridTemplateColumns={'auto auto'}>
      <UnorderedList fontSize={'list'}>
        <ListItem>It is a superset of Javascript​ that leverages strong types</ListItem>
        <ListItem>It has a transpiler (much like babel) that will transpile your application logic into a known ES standard to ensure browser support​</ListItem>
        <ListItem>It is a compiler in the idea of a type checker.  It will evaluate the types in the application and ensure everything is written to work together​</ListItem>
        <ListItem>It is a way to both explicitly and implicitly describe what you are working with at any given time</ListItem>
      </UnorderedList>
      <Image src={'images/ts-diagram.png'} />
    </Grid>
    <Notes>TypeScript is a language that sits on top of JavaScript.  The language ships with a transpiler that will take the given TypeScript and turn it into 
      complaint JavaScript that matches the provided standard.  It also comes with a compiler that runs PRIOR to the transpiler.  This means that your application is now
      checked prior to shipping.  If there are any type of conflicts during the compile time check then your application will not build.  This means that you get to find a fair amount of issues
      before it even goes to the browser.  The super annoying issues we all run into and debug for hours like, mispelling a variable name, will come as compiler errors rather than runtime errors in the 
      browser.  
      TypeScript will also infer type definitions if it can, but we always have the opportunity to explicitly set them ourselves. 
      Since TypeScript transpiles down, you will likely also see tooling that is not available in the ES standard yet.  Some examples are some of the most used tools today, optional chaining and null coalescing.  
      These are both tools that have been in TypeScript for a while.  Showing its C# roots, the syntax for these tools looks almost identical in TS.  These were eventually adopted to the ES standard, however, they have been 
      available in TS for at least 3 or 4 years at the time of recording this.
    </Notes>
  </SlideWithHeader>;
}