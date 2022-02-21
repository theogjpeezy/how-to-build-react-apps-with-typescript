import React from 'react';
import './App.css';
import { Deck } from 'spectacle';
import { SlideShowTemplate } from './template/slideShowTemplate';
import { IntroSlide } from './slides/intro';
import { AgendaOne } from './slides/agendaOne';
import { AgendaTwo } from './slides/agendaTwo';
import { theme } from './theme/theme';
import { WhatIsReactSection } from './slides/whatIsReactSection';
import { WhatisReact } from './slides/whatIsReact';
import { WhatConstitutesReact } from './slides/whatConstitutesReact';
import { SampleComponent } from './slides/sampleComponent';
import { StateAndProps } from './slides/propsAndState';
import { WhatIsTypeScriptSection } from './slides/whatIsTypeScriptSection';
import { WhatIsTypeScript } from './slides/whatIsTypeScript';
import { BenefitsOfTypeScript } from './slides/benefitsOfTypeScript';
import { TypeBasicDefinition } from './slides/typeBasicDefinition';
import { TypeUserDefined } from './slides/typeUserDefined';
import { TypeGenerics } from './slides/typeGenerics';
import { NewTypeScriptReactApp } from './slides/newTypeScriptReactApp';
import { ConvertingExisting } from './slides/convertingExisting';
import { ComposingTypes } from './slides/composingTypes';
import { PropsAndStateExample } from './slides/propsAndStateExample';
import { FurtherResources } from './slides/furtherResources';
import { AnyAndUnknown } from './slides/anyAndUnknown';
import { Casting } from './slides/casting';
import { BringingItTogetherSection } from './slides/bringingItTogetherSection';
import { ReactJSShortComings } from './slides/reactJSShortcomings';
import { TypingProps } from './slides/typingProps';
import { TypingState } from './slides/typingState';
import { TypeScriptDetractors } from './slides/typeScriptDetractors';
import { TypeSection } from './slides/TypesSection';

function App() {
  return (
    <Deck template={() => <SlideShowTemplate />} theme={theme} >
      <IntroSlide />
      <AgendaOne />
      <AgendaTwo />
      <WhatIsReactSection />
      <WhatisReact />
      <WhatConstitutesReact />
      <SampleComponent />
      <StateAndProps />
      <PropsAndStateExample />
      <WhatIsTypeScriptSection />
      <WhatIsTypeScript />
      <BenefitsOfTypeScript />
      <TypeScriptDetractors />
      <TypeSection />
      <TypeBasicDefinition />
      <TypeUserDefined />
      <ComposingTypes />
      <TypeGenerics />
      <AnyAndUnknown />
      <Casting />
      <BringingItTogetherSection />
      <ReactJSShortComings />
      <TypingProps />
      <TypingState />
      <NewTypeScriptReactApp />
      <ConvertingExisting />
      <FurtherResources />
    </Deck>
  );
}

export default App;
