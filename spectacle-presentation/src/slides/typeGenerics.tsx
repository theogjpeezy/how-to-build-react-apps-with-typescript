import React from 'react';
import { SectionSlide } from '../template/baseSlide';

export const TypeGenerics: React.FunctionComponent = () => {
  return <SectionSlide slideTitle={'How to Add Types - Generics'}>
    <UnorderedList>
      <ListItem>Generics allow a user to pass a parameter to a type</ListItem>
      <ListItem>Some built in examples are:</ListItem>
      <UnorderedList>
        <ListItem><CodeSpan language={'typescript'}>{`Array<T>`}</CodeSpan></ListItem>
        <ListItem><CodeSpan language={'typescript'}>{`Partial<T>`}</CodeSpan></ListItem>
      </UnorderedList>
      <ListItem>Generic in Function</ListItem>
      <CodePane language={'typescript'}>
        {
          function justReturn<T>(a: T): T {
            return a;
          }

          justReturn(1);
          justReturn('b');
        }
      </CodePane>
      <ListItem>Generic in Class</ListItem>
      <CodePane language={'typescript'}>
        {
          class MyClass<TId> {
            constructor(private id: TId) {}
          }

          const myNumberIdObject = new MyClass<number>(1);
          const myStringIdObject = new MyClass<string>('id');
        }
      </CodePane>
    </UnorderedList>
    <Notes> </Notes> 
  </SectionSlide>;
}

//How to Add Types - Generics
/*
Generics allow a user to pass a parameter to a type
Some built in examples are Array<T> or Partial<T>
Example in a Function

Example in a Class
*/