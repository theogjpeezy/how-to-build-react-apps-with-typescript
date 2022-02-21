import React from 'react'
import { Appear, Box, CodePane, Grid, Heading, ListItem, Notes, UnorderedList } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const SampleComponent: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Sample Component'}>
    <Grid gridTemplateColumns={'60% 40%'} gridTemplateRows={'auto auto'} gridColumnGap={"1vw"} width={.9}>
      <UnorderedList fontSize={'list'}>
        <ListItem>Props is an object with properties</ListItem>
        <ListItem>The component can use the props object to render the component</ListItem>
        <ListItem>The most basic components are pure functions that take props and returns JSX without side effects</ListItem>
      </UnorderedList>
      <Box padding={'2vh 0 0 0'}>
        <Appear stepIndex={1}>
          <Heading textAlign={'left'} fontSize={'secondaryList'} padding='0px' margin={'0px'}>With name prop given</Heading>
          <Box padding={1}><NameLabel name={"Justin Cronin"} /></Box>
        </Appear>
        <Appear stepIndex={2}>
          <Heading textAlign={'left'} fontSize={'secondaryList'} padding='0px' margin={'0px'}>Without name prop given</Heading>
          <Box padding={1}><NameLabel /></Box>
        </Appear>
      </Box>
      <Appear stepIndex={0}>
        <CodePane width={.5} language={'javascript'}>
          {`
            const NameLabel = props => {
              const name = !!props?.name ? props.name : 'not sure';

              return <h1>{\`My name is \$\{name\}\`}</h1>;
            }
          `}
        </CodePane>
      </Appear>
    </Grid>
    <Notes>As we discussed before, props is simply an object with properties on it.  We don't necessarily know what it is, but we will know what we need off of it.  
      The most basic of React components will take in props and return instructions on how to render a view with them.  That is it does not have any side effects.  For this talk,
      if we refer to side effects, we are likely talking about state.  There is way more to side effects than I can cover here.  If you want to learn more I would recommend looking into 
      functional programming practices as this is the tip of the iceburg here. 
      The function below is just as we described.  A function that takes in props and uses it to determine if there is a name given or not.  We use that result to fill in some text in a heading below.
      This is what it would look like if we gave my name as a string for the name property.
      This is what it would look like if we did not provide a name property.
    </Notes>
  </SlideWithHeader>;
}

interface INameLabel {
  name?: string;
}
const NameLabel: React.FunctionComponent<INameLabel> = props => {
  const name = !!props?.name ? props.name : 'not sure';

  return <h1>{`My name is ${name}`}</h1>;
}