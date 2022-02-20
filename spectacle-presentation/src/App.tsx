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

function App() {
  return (
    <Deck template={() => <SlideShowTemplate />} theme={theme} >
      <IntroSlide />
      <AgendaOne />
      <AgendaTwo />
      <WhatIsReactSection />
      <WhatisReact />
    </Deck>
  );
}

export default App;
