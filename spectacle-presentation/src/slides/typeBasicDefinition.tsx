import React from 'react';
import { CodePane, Notes } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const TypeBasicDefinition: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={"How to Add Types - Basic Definitions"}>
    <CodePane language={'typescript'}>
      {`
        // Basic type assignment to a variable
        const myCounter: number = 0;

        //Inferring types
        const myInferredCounter = 0; //still number

        //Describing Objects
        const myObject: {
          propertyA: string;
          propertyB?: boolean;
          propertyC: number[];
        } = {
          propertyA: 'propertyA',
          propertyC: [1,2,3]
        }
        // Declaring functions
        function sum(a: number, b: number): number {
          return a + b;
        }
        
        // Declaring function variables
        const getSum: (a: number, b: number) => number = a + b;
      `}
    </CodePane>
    <Notes> </Notes>
  </SlideWithHeader>;
}