import React from 'react';
import { CodePane, Notes, Slide } from 'spectacle';

export const TypeUserDefinedComposed: React.FunctionComponent = () => {
  return <Slide backgroundColor='white'>
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
  </Slide>;
}