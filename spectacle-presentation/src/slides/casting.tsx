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
    <Notes> 
      This is a basic example of casting.  The first block shows how we would cast in a normal TypeScript file.  That is one that has the TS file extension. If it is using React JSX syntax, the file extension
      will instead be tsx and since tags are used, we need an alternative way to designate a cast.  The "as type" notation does that for us.
    </Notes>
  </Slide>
}

