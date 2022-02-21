import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const ComposingTypes: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box padding={'10vh 0 0 0'}>  
      <CodePane language={'typescript'}>
        {`
          // Unions
          type Category = 'catA' | 'catB' | 'catC';

          // Intersection
          type CommonProperty = { a: string, b: number } & { a: string, c: boolean };

          // Extending interfaces
          interface IHasType {
            type: Category;
          }

          interface IMarketItem extends IHasType {
            name: string;
          }
        `}
      </CodePane>
    </Box>
    <Notes> </Notes>
  </Slide>
}