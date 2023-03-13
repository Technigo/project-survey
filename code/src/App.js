import React from 'react';
import { Header } from './components/Header'
import SubmitButton from './components/Button'

export const App = () => {
  return (
    <div>
      <Header />
      <SubmitButton name="Submit" />
    </div>
  );
}
