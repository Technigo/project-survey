import React, { useState } from 'react';

import { Name } from 'components/Name';
import { City } from 'components/City';
import { Age } from 'components/Age';
import { Level } from 'components/Level';
import  Result  from 'components/Result';



export const App = () => { 
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [level, setLevel] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
    <div>
      <h1>Welcome to this survey. Find me in src/app.js!</h1>
    </div>

    <section class="section">

    {step === 1 && ( 
      <Name name={name} setName={setName} />
    )}

    {step === 2 && (
      <Age age={age} setAge={setAge} />
    )}

  {step === 3 && (
      <City city={city} setCity={setCity} />
    )}

  {step === 4 && (
      <Level level={level} setCity={setLevel} />
    )}

    {step >= 5 && (
      <Result name={name} age={age} city={city} level={level} />
    )}

      {step < 5 && (
        <>
          <p>Current step: {step} of 5</p> <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}

    </section></>
  );
}



