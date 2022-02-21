import React from 'react';
import { CodePane, Notes, Slide } from 'spectacle';

export const TypeBasicDefinition: React.FunctionComponent = () => {
  return <Slide backgroundColor='white'>
    <CodePane language={'typescript'} fontSize={'24px'} highlightRanges={[[1,2],[4,5],[7,15],[16,19],[21,22]]}>
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
        const getSum: (a: number, b: number) => number = (a,b) => a + b;
      `}
    </CodePane>
    <Notes> 
      First we have our basic assignments.  We have a variable, what is it's type.  We can explicitly define the type as number shown here.  We can also let the compiler infer it for us. 
      We can describe object schemas as well.  Here we have an object with three properties.  propertyA is a string, propertyB is an option boolean.  The question mark at the end of the property name
      is the equivalent to saying boolean or undefined.  Lastly, propertyC is an array of numbers.
      We can also type functions.  This function takes two arguments, a and b that are both numbers and it returns a number
      If you need to declare a function variable, you can type that too.  Its a bit different, but follows the normal fat arrow notation.  
    </Notes>
  </Slide>;
}