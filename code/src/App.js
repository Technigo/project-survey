import React, { useState } from 'react';

import { Size } from './components/Size';
import { Pattern } from './components/Pattern';
import { Name } from './components/Name';
import { Colour } from './components/Colour';
import { Result } from './components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setUserName] = useState('');
  const [color, setUserColor] = useState('#ffffff');
  const [pattern, setUserPattern] = useState('');
  const [size, setUserSize] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  console.log({ name });

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setUserName} />
      )}
      {step === 2 && (
        <Colour color={color} setColor={setUserColor} />
      )}
      {step === 3 && (
        <Pattern pattern={pattern} setPattern={setUserPattern} />
      )}
      {step === 4 && (
        <Size size={size} setSize={setUserSize} />
      )}
      {step >= 5 && (
        <Result name={name} color={color} pattern={pattern} size={size} />
      )}

      {step < 5 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next</button>
        </>
      )}
    </>
  );
};
