import React from "react";
import { Grid, ListItem, Notes, UnorderedList } from "spectacle";
import { SlideWithHeader } from "../template/baseSlide";

export const AgendaOne = () => <SlideWithHeader slideTitle="Agenda">
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
  <Notes> </Notes>
</SlideWithHeader>

/*
What is TypeScript?
Reason for inception
Reason for adoption to a project
Types
Native Types
User-Defined Types
Composed Types
Types with Generics
*/