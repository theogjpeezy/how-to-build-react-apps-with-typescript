import React from 'react';
import './App.css';
import { Deck, defaultTheme } from 'spectacle';
import { SlideShowTemplate } from './template/slideShowTemplate';
import { IntroSlide } from './slides/intro';
import { AgendaOne } from './slides/agendaOne';
import { AgendaTwo } from './slides/agendaTwo';
import { theme } from './theme/theme';

function App() {
  return (
    <Deck template={() => <SlideShowTemplate />} theme={theme} >
      <IntroSlide />
      <AgendaOne />
      <AgendaTwo />
    </Deck>
  );
}

export default App;
