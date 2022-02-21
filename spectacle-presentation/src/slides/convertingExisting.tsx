import React from 'react';
import { Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const ConvertingExisting: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'Converting an Existing React App'} subHeading={'Adopting Gradually'}>
    <Notes>1. Using the wrong prop for completeTodo for TodoCardGrid in App.jsx.              
      2. App.jsx sends the wrong function for addTodo                                    
      3. App.jsx compares name todo.name to todoName, not todo.title                                  
    </Notes>
  </SectionSlide>;
}