import React, { useState } from 'react';
import StartPage from './components/StartPage'
import NameQuestion from './components/NameQuestion'
import SelectQuestion from './components/SelectQuestion'
import RadioButtons from 'components/RadioButtons';

export const App = () => {

  return (
    <div>
      <StartPage />

      <NameQuestion />

      <SelectQuestion />

      <RadioButtons />

    </div>

  );
}

/*
<h1>Current temperature: {temperature} degrees</h1>

<button onClick={() => setTemperature(-5)}>Freeze!</button>
<button onClick={() => setTemperature(30)}>Warm!</button>
<button onClick={() => setTemperature(120)}>Boil!</button>

{temperature > 100 && <p>Steamy!</p>} */
