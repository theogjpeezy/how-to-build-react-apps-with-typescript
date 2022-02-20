import React from 'react';
import { CodePane, ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const TypeUserDefinedComposed: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'How to Add Types - User Defined and Composed'}>
      <CodePane language={'typescript'}>
        {`
          // User Defined Types
          type MyCategory = {
            type: string;
            count: number;
          }
          
          // Interfaces
          interface IMyCategory {
            type: string;
            count: number;
          }
        `}
      </CodePane>
    <Notes> </Notes>
  </SlideWithHeader>;
}