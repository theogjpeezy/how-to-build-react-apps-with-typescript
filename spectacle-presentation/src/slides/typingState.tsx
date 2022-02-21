import React from 'react';
import { Box, CodePane, Slide } from 'spectacle';

export const TypingState: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box padding={'10vh 0 0 0'}>
      <CodePane language={'typescript'} highlightRanges={[4,[5,6],9,[10,11]]} stepIndex={0}>
        {`
          // useState Hook
          
          // Inferred type
          const [count, setCount] = useState(0);
          setCount(undefined); //compiler error. undefined is not of type number
          setCount(1); //works

          // Explicit type
          const [bigCount, setBigCount] = useState<number | undefined>();
          console.log(bigCount.toString()); //compiler error. bigCount may be undefined
          console.log(bigCount?.toString()); //works
        `}
      </CodePane>
    </Box>
  </Slide>
}