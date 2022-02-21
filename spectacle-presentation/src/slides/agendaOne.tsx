import React from "react";
import { Grid, ListItem, Notes, UnorderedList } from "spectacle";
import { SlideWithHeader } from "../template/baseSlide";

export const AgendaOne: React.FunctionComponent = () => <SlideWithHeader slideTitle="Agenda">
  <Grid gridTemplateColumns={"auto auto"}>
    <UnorderedList fontSize={"list"}>
      <ListItem>What is React?</ListItem>
      <UnorderedList fontSize={"secondaryList"}>
        <ListItem>Overview and Philosophy</ListItem>
        <ListItem>Discriminators from competitors</ListItem>
        <ListItem>Evolution over time</ListItem>
      </UnorderedList>
      <ListItem>What is a React Component?</ListItem>
      <UnorderedList fontSize={"secondaryList"}>
        <ListItem>Component Props</ListItem>
        <ListItem>Component State</ListItem>
        <ListItem>When a component renders</ListItem>
      </UnorderedList>
    </UnorderedList>
    <UnorderedList fontSize={"list"}>
      <ListItem>What is TypeScript?</ListItem>
      <UnorderedList fontSize={"secondaryList"}>
        <ListItem>Reason for inception</ListItem>
        <ListItem>Reason for adoption to a project</ListItem>
      </UnorderedList>
      <ListItem>Types</ListItem>
      <UnorderedList fontSize={"24px"}>
        <ListItem>Native Types</ListItem>
        <ListItem>User-Defined Types</ListItem>
        <ListItem>Composed Types</ListItem>
        <ListItem>Types with Generics</ListItem>
      </UnorderedList>
    </UnorderedList>
  </Grid>
  <Notes>
    We will start today by going over what React is and why we would want to use it, and also how it separates itself with the myriad of front end frameworks out there.
    We will also touch on the philosophy of React and how it has changed over time
    Next we will go over what the structure of a React Component is. 
    Once we tackle this, we can talk through a component's props and state.
    With those bases covered we can start talking about TypeScript.
    We need to cover what TypeScript is, what problems it solves, and what it brings for us in React
  </Notes>
</SlideWithHeader>