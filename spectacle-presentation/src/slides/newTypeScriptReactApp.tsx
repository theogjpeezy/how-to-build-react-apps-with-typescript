import React from 'react';
import { Box, CodeSpan, Notes, Text } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const NewTypeScriptReactApp: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Creating a new React App with TypeScript'}>
    <Box padding={'10vh 1vw 10vh 1vw'} borderRadius={'20px'} margin={'2vh'} backgroundColor={'rgba(1,1,1,.2)'}>
      <Text textAlign={'center'}><CodeSpan>create-react-app my-ts-app --template=typescript</CodeSpan></Text>
    </Box>
    <Notes> </Notes>
  </SlideWithHeader>;
}