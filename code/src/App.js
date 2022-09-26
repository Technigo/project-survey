import React, { useState } from 'react';
import Form from './components/Form';

export const App = () => {

  return (
    <main>
      <Form />
    </main>

  );
}

/*
<h1>Current temperature: {temperature} degrees</h1>

<button onClick={() => setTemperature(-5)}>Freeze!</button>
<button onClick={() => setTemperature(30)}>Warm!</button>
<button onClick={() => setTemperature(120)}>Boil!</button>

{temperature > 100 && <p>Steamy!</p>} */
