import React from 'react';
import { UnorderedList, ListItem, Notes } from 'spectacle';
import { SlideWithHeader } from '../template/baseSlide';

export const BenefitsOfTypeScript: React.FunctionComponent = () => {
  return <SlideWithHeader slideTitle={'Benefits of TypeScript'}>
    <UnorderedList fontSize={'list'}>
    <ListItem>Types give us a way to ensure that our changes work with the application as written.  (Reduction of runtime debugging)​</ListItem>
    <ListItem>Types are self-documenting reducing the amount of documentation drift.​</ListItem>
    <ListItem>Types allow us to communicate intent for functionality​</ListItem>
    <ListItem>Types allow us to identify regression through tooling rather than just inspection or smoke testing​</ListItem>
    <ListItem>Most modern IDEs support Typescript meaning the autocompletion and warning alerts are more accurate​</ListItem>
    <ListItem>Typescript is widely adopted, so most of your third-party libraries already ship with types, meaning less jumping to online docs​</ListItem>
    <ListItem>At the end of the day, we still ship Javascript, so past types, there isn't anything different in the way we write the application​</ListItem>
    <ListItem>Adoption can be gradual</ListItem>
    </UnorderedList>
    <Notes> 
      There are a ton of benefits to TypeScript.  When working in teams I find it just about mandatory.  By describing types in our applications we are actually
      communicating with our peers and documenting our application as we go.  If we have a function that takes a single argument, in JavaScript, we don't have a way to describe what that 
      argument is.  We then have to write header comments to drive things like JSDoc to say that it expects that argument to be a number.  However, what happens when there is a hotfix and someone changes
      it to be a string instead.  In the heat of the moment, we update the function, but not the documentation.  Now we have drift.  By declaring the type in the function signature we can update our change and 
      documentation at the same time.  Once we change the function's argument type from number to string, the compiler will enforce that for us.  
      Since these things are handled by the compiler, this also makes refactors more straight forward.  Since the compiler is doing the check, it should tell us what we break when we change types due to refactors.  This can
      be huge for planning effort as well as regression scope.
      If you are using an IDE like VS Code, Webstorm, or something of the sort, you will also get a much more accurate intellisense/code completion experience.  Most of these IDEs will look for the typing files
      and drive suggestions from there.  
      If you have ever used third party packages like lodash or something, you might have to have the online docs up with you at the same time.  Most of these libraries already come with types though, so you can see the documentation
      right in the IDE or even explore the definition files yourself.  If those libraries have types, they will be included in the compile step so you can be sure you are using them as intended at build time rather than run time.  If you have
      used more complex libraries such as RxJS, types can really help here. 
      It is important to note that the types are not used after the compile step.  Your types will not ship with the transpiled artifact(s).  If you have 8 million interfaces and types, the browser will not have to download that to run your
      application.
      Lastly, since TypeScript is JavaScript, you could have an existing application built on javascript using the babel transpiler and just switch out the babel transpiler for typescript and be good to go.  You don't have
      to make your entire app TypeScript in the first go.  You could adopt as you go instead.  I've done this on two projects so far and its worked out wonderfully.  The current program I am on started at 0% about a year ago
      and we are right at the cusp of 80% now.  The last 20%? We'll get to it when it makes sense, there's not pressure to do this in one fell swoop.
    </Notes>
  </SlideWithHeader>;
}