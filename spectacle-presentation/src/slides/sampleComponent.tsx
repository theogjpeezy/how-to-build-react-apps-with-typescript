import React from 'react'
import { Box, CodePane, Grid, Heading, ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const SampleComponent: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Sample Component'}>
    <Grid gridTemplateColumns={'60% 40%'} gridTemplateRows={'auto auto'} gridColumnGap={"1vw"} width={.9}>
      <UnorderedList fontSize={'list'}>
        <ListItem>Props is an object with properties</ListItem>
        <ListItem>The component should end up adding a heading to the DOM with the given string inserted</ListItem>
        <ListItem>Example of a Pure Component as it will return the same output given the same input</ListItem>
      </UnorderedList>
      <Box padding={'2vh 0 0 0'}>
        <Heading textAlign={'left'} fontSize={'secondaryList'} padding='0px' margin={'0px'}>With name prop given</Heading>
        <Box padding={1}><NameLabel name={"Justin Cronin"} /></Box>
        <Heading textAlign={'left'} fontSize={'secondaryList'} padding='0px' margin={'0px'}>Without name prop given</Heading>
        <Box padding={1}><NameLabel name={"Justin Cronin"} /></Box>
      </Box>
      <CodePane width={.5} language={'javascript'}>
        {`
          const NameLabel = props => {
            const name = !!props?.name ? props.name : 'not sure';

            return <h1>{\`My name is \$\{name\}\`</h1>;
          }
        `}
      </CodePane>
    </Grid>
    <Notes> </Notes>
  </SlideWithHeader>;
}

interface INameLabel {
  name?: string;
}
const NameLabel: React.FunctionComponent<INameLabel> = props => {
  const name = !!props?.name ? props.name : 'not sure';

  return <h1>{`My name is ${name}`}</h1>;
}