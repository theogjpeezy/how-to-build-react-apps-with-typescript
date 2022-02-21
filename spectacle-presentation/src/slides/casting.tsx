import React from 'react';
import { Box, CodePane, Notes, Slide, UnorderedList } from 'spectacle';


export const Casting: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box padding={'15vh 0 0 0'}>
      <CodePane language={'typescript'}>
        {`
          //An object can be casted to another type if needed.
          function getValue(obj: any): string {
            return <string>obj.value;
          }
          //In tsx files the syntax would be different since jsx/tsx uses tags.
          function getValue(obj: any): string {
            return obj.value as string;
          }
        `}
      </CodePane>
    </Box>
    <Notes> </Notes>
  </Slide>
}

