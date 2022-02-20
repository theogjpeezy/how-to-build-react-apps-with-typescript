import React from 'react';
import { UnorderedList, ListItem, Notes } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const BenefitsOfTypeScript: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Benefits of TypeScript'}>
    <UnorderedList>
    <ListItem>Types give us a way to ensure that our changes work with the application as written.  (Reduction of runtime debugging)​</ListItem>
    <ListItem>Types are self-documenting reducing the amount of documentation drift.​</ListItem>
    <ListItem>Types allow us to communicate intent for functionality​</ListItem>
    <ListItem>Types allow us to identify regression through tooling rather than just inspection or smoke testing​</ListItem>
    <ListItem>Most modern IDEs support Typescript meaning the autocompletion and warning alerts are more accurate​</ListItem>
    <ListItem>Typescript is widely adopted, so most of your third-party libraries already ship with types, meaning less jumping to online docs​</ListItem>
    <ListItem>At the end of the day, we still ship Javascript, so past types, there isn't anything different in the way we write the application​</ListItem>
    <ListItem>Encourages ongoing refactors as a contract is established already for functionality​</ListItem>
    </UnorderedList>
    <Notes> </Notes>
  </SlideWithHeader>;
}