import React from 'react';
import { Box, Grid, Heading, Link, ListItem, Text, UnorderedList } from 'spectacle';
import { BlankSlide } from '../template/baseSlide';


export const FurtherResources: React.FunctionComponent = () => {
  return <BlankSlide>
    <Grid>
      <Box>
        <Heading textAlign={'left'} fontSize={'h3'}>Further Resources</Heading>
        <UnorderedList fontSize={'list'} listStyleType={'none'}>
          <ListItem>TypeScript Playground - Play with TypeScript in the browser - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/3s52IbZ'}>https://bit.ly/3s52IbZ</Link></ListItem>
          <ListItem>TypeScript Deep Dive - GitBook written by Basarat Ali Syed - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/35f0Iox'}>https://bit.ly/35f0Iox</Link></ListItem>
          <ListItem>React Tutorial - Tic Tac Toe Game in React - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/36u2H95'}>https://bit.ly/36u2H95</Link></ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Heading textAlign={'left'} fontSize={'h3'}>Make Presentations with React</Heading>
        <Text fontSize={'list'}>Spectacle - a presentation framework built in React - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/3JIV8cG'}>https://bit.ly/3JIV8cG</Link></Text>
      </Box>
    </Grid>
  </BlankSlide>
}