import React from 'react';
import { Heading, Slide } from 'spectacle';
export interface IBaseSlideProps {
  slideTitle: string;
}
export const SlideWithHeader: React.FunctionComponent<IBaseSlideProps> = ({slideTitle, children}) => {

  return <Slide backgroundColor={'slide'} backgroundImage={'url(images/swirl-only-clearedge-logo-rgb.png)'} backgroundOpacity={.2} backgroundPosition={'50% 60%'} backgroundSize={'30%'}>
    <Heading textAlign={"left"} backgroundColor={'#545859'}>{slideTitle}</Heading>
    {children}
  </Slide>
}


export const BlankSlide: React.FunctionComponent = ({children}) => {
  return <Slide backgroundColor={'slide'} backgroundImage={'url(images/swirl-only-clearedge-logo-rgb.png)'} backgroundOpacity={.2} backgroundPosition={'center'} backgroundSize={'40%'}>
    {children}
  </Slide>
}