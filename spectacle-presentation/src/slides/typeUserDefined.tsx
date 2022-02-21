import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const TypeUserDefined: React.FunctionComponent = () => {
  return <Slide backgroundColor='white'>
    <Box padding={'3vh 0 0 0'} position={'center'}>
      <CodePane language={'typescript'} highlightRanges={[[3,10],[13,20]]}>
        {`
          // User Defined Types
          // Type Alias
          type MyCategory = {
            type: string;
            count: number;
          }
          const myCategoryWithTypeAlias: MyCategory = {
            type: 'alias',
            count: 0
          }
          
          // Interfaces
          interface IMyCategory {
            type: string;
            count: number;
          }
          const myCategoryWithInterface: IMyCategory = {
            type: 'interface',
            count: 0
          }
        `}
      </CodePane>
    </Box>
    <Notes> 
      Sometimes type definitions can get verbose.  You can use type aliases and interfaces to centralize that definition.  If we wanted to describe an alias 
      we could do so like MyCategory.  This simply puts the definition into a type we can use elsewhere like the creation of this variable.  
      Interfaces are similar to type aliases.  It is important to note since these are types they are not in the final artifact so they are not runtime values. They are used specifically for 
      compile time checks. 
      As for when to use which, most of the time it comes down to preference.
    </Notes>
  </Slide>;
}