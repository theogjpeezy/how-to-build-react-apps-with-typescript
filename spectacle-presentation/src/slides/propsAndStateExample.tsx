import React from "react";
import { Appear, Box, CodePane, Grid, Heading, Notes } from "spectacle";
import { BlankSlide } from "../template/baseSlide"

export const PropsAndStateExample: React.FunctionComponent = () => {
  return <BlankSlide>
    <Grid gridTemplateRows={'auto auto'}>
      <CodePane language='javascript' highlightRanges={[1,2,[4,8],6,7, [11,12]]}>
        {`
          const IncrementButton = props => {
            const [count, setCount] = React.useState(0);

            return <div>
              <label>{count}</label>
              <button onClick={() => setCount(count + 1)}>{props.buttonText}</button>
              <button onClick={() => setCount(0)}>reset</button>
            </div>;
          }

          //usage
          <IncrementButton buttonText={"click me"} />
        `}
      </CodePane>
      <Box>
        <Appear stepIndex={5}>
          <Heading fontSize={'48px'} textAlign={'left'}>IncrementButton in action</Heading>
          <Box padding={2}>
            <IncrementButton buttonText={"click me"} />
          </Box>
        </Appear>
      </Box>
    </Grid>
    <Notes>Here we have a component that will take in props with some button text.  We can use that to populate the text in a button.  That button is going to increment a counter.  We will also have the ability to 
      reset the counter. The first part is out function declaration.  We are using fat arrow notation here.  We name our component and then declare we have a single input of props.  The next thing we are going to do
      is use the useState hook to declare a state property for this component.  It is important to note, that this allocation of the state property only happens on the first render.  Its kind of strange to read it, but the 
      state is declared once during the lifecycle.  After that we use the provided function to assign a new value.  That is to say, if we set count to 5, but then we changed the button text, we would re-render, but count would still be
      5, not zero.  From this call, we get our count value and the function to set count.
      Next we return our view.  Show the current count with a label.  We have our two buttons.  The first is our increment button.  When clicked it takes the current count and sets it to the current value plus one.  Our second button always
      sets it to zero.  
      The way we would use this is as shown.  
      Here is a working demo of it.  You can click the "click me" button to increment and the reset button to reset.
    </Notes>
  </BlankSlide>
}

interface IIncrementButtonProps {
  buttonText: string;
}
const IncrementButton: React.FunctionComponent<IIncrementButtonProps> = props => {
  const [count, setCount] = React.useState(0);

  return ( 
    <div>
      <label style={{"marginRight": '1vw'}}>{count}</label>
      <button onClick={() => setCount(count + 1)} style={{marginRight: '1vw'}}>{props.buttonText}</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}