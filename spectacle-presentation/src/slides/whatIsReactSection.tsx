import React from "react";
import { Heading, Notes } from "spectacle";
import { SectionSlide } from "../template/baseSlide";

export const WhatIsReactSection: React.FunctionComponent = () => <SectionSlide sectionName={"What is React?"}>
  <Heading fontSize={'h3'} padding={'0 10hw 0 0'}>What it is and how to build apps with it</Heading>
  <Notes> </Notes>
</SectionSlide>