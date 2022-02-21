import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const ComposingTypes: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box padding={'10vh 0 0 0'}>  
      <CodePane language={'typescript'} highlightRanges={[[1,5],[7,14]]}>
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
    <Notes> 
      Once we have types defined we can start doing some interesting things.  For instance, what if a type is more than just one thing.  What if a variable could be a number or a boolean.  That is where unions come in.  
      Using the bar character we can give multiple options for what a type could be.  In this example we are saying not only is category a string, but it must be one of these 3 strings specifically.  If we gave catD instead, we 
      would get an error, however, a b and c are all acceptable.
      We can also intersect types using the & operator.  This will find properties that exist in both of the given types.  For instance commone property would end up being an object that has a single property, a which is a string.
      Something that is specific to interfaces is the extends keyword.  We can define an interface and then use it like a union almost with the extends keyword.  IMarketItem is now an interface with both a name and type property on it.
    </Notes>
  </Slide>
}