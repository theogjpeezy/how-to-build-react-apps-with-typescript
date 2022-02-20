import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

export const TypeUserDefinedComposed: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'How to Add Types - User Defined and Composed'}>
    <UnorderedList>
      <ListItem>User Defined Types</ListItem>
      <CodePane language={'typescript'}>
        {
          type MyCategory = {
            type: string;
            count: number;
          }
        }
      </CodePane>
      <ListItem>Interfaces</ListItem>
      <CodePane language={'typescript'}>
        {
          interface IMyCategory {
            type: string;
            count: number;
          }
        }
      </CodePane>
    </UnorderedList>
    <Notes> </Notes>
  </SlideWithHeader>;
}

//How to Add Types - User Defined and Composed
/*
User Defined
Composed
Types
  Interfaces
*/