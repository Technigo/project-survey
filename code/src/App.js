import React from 'react';
import { Header } from './components/Header/Header';
import { Name } from './components/Name/Name';
import { Date } from './components/Date/Date';
import { Transportation } from './components/Transportation/Transportation';
import { SkiEquip } from './components/SkiEquip/SkiEquip';
import { Textbox } from './components/Textbox/Textbox';
import { Summary } from './components/Summary/Summary';
import { ButtonNext } from './components/Buttons/ButtonNext/ButtonNext';
import { ButtonSubmit } from './components/Buttons/ButtonSubmit/ButtonSubmit';

export const App = () => {
  return (
    <div>
      <h1>Find me in src/app.js!</h1>
      <h2>Test</h2>
      <Header />
      <Name />
      <Date />
      <Transportation />
      <SkiEquip />
      <Textbox />
      <Summary />
      <ButtonNext />
      <ButtonSubmit />
    </div>
  );
}
