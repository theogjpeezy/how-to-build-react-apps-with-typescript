import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const TypingProps: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box>
      <CodePane language={'typescript'} highlightRanges={[[2,6],[10,12],[14,16],[18,21]]} stepIndex={0}>
        {`
          // Typing Props
          // Create a type for the props object.  Type or Interface can do
          interface ICompProps {
            value: string;
            count: number;
          }

          // Function Components
          // Using the React.FunctionComponent type - this auto includes children as a prop
          const Comp: React.FunctionComponent<ICompProps> = ({value, count}) => {
            return <label>{\`The \$\{value\} count is \$\{count\}\`}</label>;
          }
          // Using type signature in the parameters - children must be defined in the given type if you want to use it
          const Comp = ({value, count}: ICompProps) => {
            return <label>{\`The \$\{value\} count is \$\{count\}\`}</label>;
          }

          //If your IDE supports it, you should now get code completion for a component's props
          //you also have type inforcement
          const myComponent = <Comp value={1}>{'some text'}</Comp>;
          //throws an error becasue value is a number and count is undefined
        `}
      </CodePane>
    </Box>
    <Notes>
      So, lets type some props.  First thing we need to do is build a definition for our object.  As said before, type alias or interface works.  I'm using an interface here.
      Once we have this, we can use it in one of two ways.  The first is we can type Comp, our component with the React provided type of FunctionComponent.  This type takes a type parameter
      which is the type of your prop object.  One we do this, the values of value and count are now string and number respectively.  One thing to note, is that FunctionComponent will also include
      a property for children.  So, in this scenario we are being kind of disengenuous in the sense that we take a children property, but we just throw it away.
      Second is not typing function itself, but the props argument.  In this scenario Comp is now a function that takes an ICompProps and returns JSX.  This is adventageous in the sense that we are explicit
      on what we take and are using.  This will not give us a children property in props and we would need to describe it explicitly.  As for which to use, I'd say its your judgement and what you are trying to achieve.
      Some prefer to see a type alias and don't want to have to declare children all of the time, so people like to see the full function signature and don't mind rolling their own base types/interfaces.
      Below we can see how this could be used incorrectly.  At this point your IDE would likely start yelling at you that value needs to be a string and count isn't provided.  This would signal you to fix it here, rather than
      waiting for runtime. 
    </Notes>
  </Slide>
}