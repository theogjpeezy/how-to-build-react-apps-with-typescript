import React from 'react';
import { CodePane, Notes, Slide } from 'spectacle';
import { BlankSlide, SlideWithHeader } from '../template/baseSlide';

export const TypeBasicDefinition: React.FunctionComponent = () => {
  return <Slide backgroundColor='white'>
    <CodePane language={'typescript'} fontSize={'24px'}>
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
  </Slide>;
}