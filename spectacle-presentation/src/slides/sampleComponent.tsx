import React from 'react'
import { SlideWithHeader } from '../template/baseSlide';

export const SampleComponent: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Sample Component'}>
    <Grid gridTemplateColumns={'auto auto'}>
      <UnorderedList>
        <ListItem>Props is an object with properties</ListItem>
        <ListItem>The component should end up adding a heading to the DOM with the given string inserted</ListItem>
        <ListItem>Example of a Pure Component as it will return the same output given the same input</ListItem>
      </UnorderedList>
      <Box>
        <CodePane language={'javascript'}>
          {
            const NameLabel = props => {
              const name = !!props?.name ? props.name : 'not sure';

              return <h1>{`My name is ${name}`</h1>;
            }
          }
        </CodePane>
        <Heading>With name prop given</Heading>
        <NameLabel name={"Justin Cronin"} />

        <Heading>Without name prop given</Heading>
        <NameLabel />
      </Box>
    </Grid>
    <Notes> </Notes>
  </SlideWithHeader>;
}

interface INameLabel {
  name?: string;
}
const NameLabel: React.FunctionComponent = props => {
  const name = !!props?.name ? props.name : 'not sure';

  return <h1>{`My name is ${name}`}</h1>;
}