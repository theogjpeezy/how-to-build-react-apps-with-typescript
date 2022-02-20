import React from 'react';
import { SlideWithHeader } from '../template/baseSlide';

export const NewTypeScriptReactApp: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Creating a new React App with TypeScript'}>
    <CodeSpan>create-react-app my-ts-app --template=typescript</CodeSpan>
    <Notes> </Notes>
  </SlideWithHeader>;
}