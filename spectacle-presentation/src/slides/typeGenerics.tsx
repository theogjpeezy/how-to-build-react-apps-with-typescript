import React from 'react';
import { CodePane, Notes } from 'spectacle';
import { SectionSlide, SlideWithHeader } from '../template/baseSlide';

export const TypeGenerics: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'How to Add Types - Generics'}>
    <CodePane language={'typescript'}>
      {`
        //Generics allow a user to pass a parameter to a type
        const numberArray: number[] = [1,2,3];
        type FullObj = {
          a: string,
          b: number
        };
        type PartialObj = Partial<FullObj>; //Properties a and b are now optional in PartialObj
        // Generics in Functions
        function justReturn<T>(a: T): T {
          return a;
        }

        justReturn(1); //returns type number
        justReturn('b'); //returns type string

        // Generics in a Class
        class MyClass<TId> {
          constructor(private id: TId) {}
        }

        const myNumberIdObject = new MyClass<number>(1); //myNumberIdObject.id is a number
        const myStringIdObject = new MyClass<string>('id'); //myStringIdObject.id is a string
      `}
    </CodePane>
    <Notes> </Notes> 
  </SlideWithHeader>;
}