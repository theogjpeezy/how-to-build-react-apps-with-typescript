import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const TypeUserDefinedComposed: React.FunctionComponent = () => {
  return <Slide backgroundColor='white'>
    <Box padding={'15vh 0 0 0'} position={'center'}>
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
    </Box>
    <Notes> </Notes>
  </Slide>;
}