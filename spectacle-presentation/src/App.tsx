import React from 'react';
import './App.css';
import { Deck, defaultTheme } from 'spectacle';
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
import { TypeUserDefinedComposed } from './slides/typeUserDefinedComposed';
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
      <TypeBasicDefinition />
      <TypeUserDefinedComposed />
      <TypeGenerics />
      <ComposingTypes />
      <AnyAndUnknown />
      <Casting />
      <BringingItTogetherSection />
      <NewTypeScriptReactApp />
      <ReactJSShortComings />
      <TypingProps />
      <TypingState />
      <ConvertingExisting />
      <FurtherResources />
    </Deck>
  );
}

export default App;
