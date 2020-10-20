import React from 'react'
import { Header } from 'components/Header'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'
import { ThirdQuestion } from './components/ThirdQuestion'
import { SubmitButton } from './components/SubmitButton'


export const App = () => {
  return (
    <div>
      <Header />
      <FirstQuestion />
      <SecondQuestion />
      <ThirdQuestion />
      <SubmitButton />
    </div>
  );
};
