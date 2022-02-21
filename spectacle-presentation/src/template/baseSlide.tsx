import React from 'react';
import { Box, Heading, Slide } from 'spectacle';
export interface IBaseSlideProps {
  slideTitle: string;
}
export const SlideWithHeader: React.FunctionComponent<IBaseSlideProps> = ({slideTitle, children}) => {

  return <Slide backgroundColor={'slide'} backgroundImage={'url(images/swirl-only-clearedge-logo-rgb.png)'} backgroundOpacity={.2} backgroundPosition={'50% 60%'} backgroundSize={'30%'}>
    <Heading padding={1} textAlign={"left"} fontSize={'h2'} backgroundColor={'#545859'}>{slideTitle}</Heading>
    {children}
  </Slide>
}


export const BlankSlide: React.FunctionComponent = ({children}) => {
  return <Slide backgroundColor={'slide'} backgroundImage={'url(images/swirl-only-clearedge-logo-rgb.png)'} backgroundOpacity={.2} backgroundPosition={'center'} backgroundSize={'40%'}>
    <Box border={'5px solid rgb(84, 88, 89, .3)'} borderRadius={"20px"} height="93%" padding={"1vh"}>
      {children}
    </Box>
  </Slide>
}

export interface ISectionSlideProps {
  sectionName: string;
  subHeading?: string;
}

export const SectionSlide: React.FunctionComponent<ISectionSlideProps> = ({sectionName, subHeading, children}) => {
  return <BlankSlide>
    <Heading margin={'30vh 0 0 2vw'} textAlign={'left'} fontSize={'h1'}>{sectionName}</Heading>
    {!!subHeading && <Heading margin={'0 10vw 0 4vw'} color={'ceCharcoal'} textAlign={'left'} fontSize={'42px'}>{subHeading}</Heading>}
    {!!children && <Box padding={1}>{children}</Box>}
  </BlankSlide>
}