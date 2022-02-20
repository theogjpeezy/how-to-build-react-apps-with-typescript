import React from "react";
import { Box, CodePane, Grid, Heading, Notes } from "spectacle";
import { BlankSlide } from "../template/baseSlide"

export const PropsAndStateExample: React.FunctionComponent = () => {
  return <BlankSlide>
    <Grid gridTemplateRows={'auto auto'}>
      <CodePane language='javascript'>
        {`
          const IncrementButton = props => {
            const [count, setCount] = React.useState(0);

            return <>
              <button onClick={() => setCount(count + 1)}>{props.buttonText}</button>
              <br />
              <label>{count}</label>
            </>;
          }

          //usage
          //<IncrementButton buttonText={"click me"} />
        `}
      </CodePane>
      <Box>
        <Heading fontSize={'h3'} textAlign={'left'}>Example</Heading>
        <Box padding={2}>
          <IncrementButton buttonText={"click me"} />
        </Box>
      </Box>
    </Grid>
    <Notes> </Notes>
  </BlankSlide>
}

interface IIncrementButtonProps {
  buttonText: string;
}
const IncrementButton: React.FunctionComponent<IIncrementButtonProps> = props => {
  const [count, setCount] = React.useState(0);

  return ( 
    <>
      <label style={{"marginRight": '1vw'}}>{count}</label>
      <button onClick={() => setCount(count + 1)}>{props.buttonText}</button>
    </>
  );
}