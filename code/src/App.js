import React from 'react';
import { Section } from './components/Section'
import { Header } from './components/Header'
import SubmitButton from './components/Button'
import { Result } from './components/Result'

export const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <SubmitButton name="Submit" />
      <Result />
    </div>
  );
}
