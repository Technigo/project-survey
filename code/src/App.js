import React, { useState } from 'react';

import { Step } from 'components/Step';
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

  console.log({ name });

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        {step === 1 && (
          <>
            <h1>Style</h1>
            <Name name={name} setName={setUserName} />
          </>
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
          <div className="bottomWrapper">
            <div className="btnParent">
              <Step step={step} setStep={setStep} />
            </div>
            <p className="stepText">{step}/5</p>
          </div>
        )}
      </div>
    </div>
  );
};
