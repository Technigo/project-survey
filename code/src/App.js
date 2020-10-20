import React from 'react'
import { Header } from 'components/Header'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'


export const App = () => {
  return (
    <div>
      <Header />
      <FirstQuestion />
      <SecondQuestion />
    </div>
  );
};
