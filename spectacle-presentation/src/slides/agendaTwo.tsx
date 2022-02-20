import React from "react";
import { CodeSpan, ListItem, Notes, UnorderedList } from "spectacle";
import { SlideWithHeader } from "../template/baseSlide";

export const AgendaTwo: React.FunctionComponent = () => <SlideWithHeader slideTitle='Agenda'>
  <UnorderedList fontSize={'list'}>
    <ListItem>Creating a TypeScript React App using <CodeSpan fontSize={'list'}>create-react-app</CodeSpan></ListItem>
    <ListItem>Using TypeScript with React</ListItem>
      <UnorderedList fontSize={'secondaryList'}>
        <ListItem>Defining a Props Type</ListItem>
        <ListItem>Adding types to Component State</ListItem>
        <ListItem>Using Typed Components</ListItem>
      </UnorderedList>
    <ListItem>Converting an existing React app to TypeScript</ListItem>
  </UnorderedList>
  <Notes> </Notes>
</SlideWithHeader>