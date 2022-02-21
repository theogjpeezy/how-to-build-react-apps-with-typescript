import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

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
    <Notes>
      Next is typing state.  Line 4 shows us inferring the type of the count value.  Here it would be inferred as number.  The operation on line 5 fails since we do not allow undefined.
      The operation on line 6 will work since it is a number.
      Next is explicitly typing.  useState takes a type parameter that describes the type of the state property as well as what the first argument of the set function is.  Here we set
      it to number or undefined using a type union.  Now on line 10 we get an error because we are trying to call a function off of something that is possibly undefined.  You've likely seen the 
      "cannot call blah property of undefined" style errors in your browser console, well, you would actually get that in your IDE during development or during the compliation step instead.  By 
      using optional chaining, we can get it to work, as seen on the next line.  
      While these are two very small changes, it completely changes the way developers will use the tools you create.  In terms of basic React Applications we are now documenting and enforcing proper
      usage of our tools.  We know which props need to be passed to a component for it to work, and inside of our components we have a clear understanding of the values we are being handed.  By typing
      your props and state you can bring a large amount of stability to your application. 
    </Notes>
  </Slide>
}