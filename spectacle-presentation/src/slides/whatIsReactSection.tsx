import React from "react";
import { Notes } from "spectacle";
import { SectionSlide } from "../template/baseSlide";

export const WhatIsReactSection: React.FunctionComponent = () => 
  <SectionSlide 
    sectionName={"What is React?"} 
    subHeading={'What it is and how to build apps with it'}
  >
    <Notes> 
      First section, What is React?
    </Notes>
  </SectionSlide>