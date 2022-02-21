import React from 'react';
import { Box, CodePane, Slide } from 'spectacle';

export const TypingProps: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box padding={'5vh 0 0 0'}>
      <CodePane language={'typescript'} highlightRanges={[[2,6],[10,12],[14,16]]} stepIndex={0}>
        {`
          // Typing Props
          // Create a type for the props object.  Type or Interface can do
          interface ICompProps {
            value: string;
            count: number;
          }

          // Function Components
          // Using the React.FunctionComponent type
          const Comp: React.FunctionComponent<ICompProps> = ({value, count}) => {
            return <label>{\`The \$\{value\} count is \$\{count\}\`};
          }
          // Using type signature in the parameters
          const Comp = ({value, count}: ICompProps) => {
            return <label>{\`The \$\{value\} count is \$\{count\}\`};
          }
          //NOTE: Using the React.FunctionComponent type will add the children prop automatically!
        `}
      </CodePane>
    </Box>
  </Slide>
}