import React from 'react';
import { Box, Grid, Heading, Link, ListItem, Notes, Text, UnorderedList } from 'spectacle';
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
          <ListItem>Add TypeScript to create-react-app - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/3v6nklK'}>https://bit.ly/3v6nklK</Link></ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Heading textAlign={'left'} fontSize={'h3'}>Make Presentations with React</Heading>
        <Text fontSize={'list'}>Spectacle - a presentation framework built in React - <Link fontSize={'list'} target={'_blank'} href={'https://bit.ly/3JIV8cG'}>https://bit.ly/3JIV8cG</Link></Text>
      </Box>
    </Grid>
    <Notes>
      That brings us to the end of the presentation.  I did want to call out some additional resources for you to explore if you wanted to find out more. 
      The TypeScript playground is out there.  It's a REPL app that lets you write TypeScript and it will show you what it transpiles to in the next pane.  Its a neat way to try stuff out.
      Next is the TypeScript Deep Dive Book.  This book is still being updated and its a really strong place for best practices.  Its free online through GitBook
      If you haven't written a react app before, you can use some of the tools from this talk and follow the instructions on the Tic Tac Toe tutorial on the React Website.
      As mentioned before, I've added a link here to instructions on how to convert your react app that used create-react-app to typescript as well.

      One last thing I wanted to call out. In the interest of eating my own dogfood.  This presentation was built using spectacle.  Its a library built on react to make presentation.  So this 
      entire slide deck is actually built in TypeScript and React.  If you want to find out more about the presentation tool you can go to that link to explore spectacle.

      Once again, my name is Justin Cronin.  Thanks again for coming!
    </Notes>
  </BlankSlide>
}