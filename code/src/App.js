import React, { useState } from 'react';
import './styles.css';

import { Intro } from 'components/Intro';
import { Name } from 'components/Name';
import { YesNo } from 'components/YesNo';
import { Shape } from 'components/Shape';
import { End } from 'components/End';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [yesno, setYesNo] = useState('');
  const [shape, setShape] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <div className="app-container">
      <Intro />
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <YesNo yesno={yesno} setYesNo={setYesNo} />
      )}
      {step === 3 && (
        <Shape shape={shape} setShape={setShape} />
      )}
      {step >= 4 && (
        <End name={name} yesno={yesno} shape={shape} />
      )}
      {step < 4 && (
        <>
          <p>{step}/3</p>
          <button type="button" className="next-btn" onClick={handleStepIncrease}>Next</button>
        </>
      )}
    </div>
  )
};

