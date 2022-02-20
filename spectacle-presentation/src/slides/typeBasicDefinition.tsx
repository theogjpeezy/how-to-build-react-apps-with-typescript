import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

export const TypeBasicDefinition: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={"How to Add Types - Basic Definitions"}>
    <UnorderedList>
      <ListItem>Basic type assignment to a variable</ListItem>
      <CodeSpan language={'typescript'}>{`const myCounter: number = 0;`}</CodeSpan>
      <ListItem>Inferring types</ListItem>
      <CodeSpan language={'typescript'}>{`const myCounter = 0; //still number`}</CodeSpan>
      <ListItem>Describing objects</ListItem>
      <CodeSpan language={'typescript'}>{`const myObject: {
        propertyA: string;
        propertyB?: boolean;
        propertyC: number[];
      } = {
        propertyA: 'propertyA',
        propertyC: [1,2,3]
      }`}</CodeSpan>
      <ListItem>Declaring functions</ListItem>
      <CodeSpan language={'typescript'}>{`function sum(a: number, b: number): number {
        return a + b;
      }`}</CodeSpan>
      <ListItem>Declaring function variables</ListItem>
      <CodeSpan language={`typescript`}>{`const getSum: (a: number, b: number) => number = a + b;</CodeSpan>
    </UnorderedList>
    <Notes> </Notes>
  </SlideWithHeader>;
}