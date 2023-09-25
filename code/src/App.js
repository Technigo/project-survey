import React, { useState } from 'react';
import { Name } from './components/Name'
import { Start } from './components/Start'
import { Activity } from './components/Activity'
import { Colour } from './components/Colour'
import { Place } from './components/Place'
import { Temp } from './components/Temp'
import { Who } from './components/Who'
import { Summary } from './components/Summary'
import { Breathe } from './components/Breathe'
import hug from './img/hug.svg';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');
  const [colour, setColour] = useState('');
  const [place, setPlace] = useState('');
  const [temp, setTemp] = useState('');
  const [who, setWho] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  const handleStepReset = () => {
    setStep(0);
    setName('');
  };
  return (
    <div className="main-container">
      <img src={hug} alt="A hug" className="hugImg" />
      {step === 0 && (
        <Start onButtonClick={() => handleStepIncrease(0)} />
      )}
      {step === 1 && (
        <Name name={name} setName={setName} step={step} />
      )}
      {step === 2 && (
        <Activity activity={activity} setActivity={setActivity} step={step} />
      )}
      {step === 3 && (
        <Colour colour={colour} setColour={setColour} step={step} />
      )}
      {step === 4 && (
        <Place place={place} setPlace={setPlace} step={step} />
      )}
      {step === 5 && (
        <Temp temp={temp} setTemp={setTemp} step={step} />
      )}
      {step === 6 && (
        <Who who={who} setWho={setWho} step={step} />
      )}
      {step === 7 && (
        <>
          <Summary
            name={name}
            activity={activity}
            colour={colour}
            place={place}
            temp={temp}
            who={who} />
          <div className="button-container">
            <button type="button" onClick={handleStepIncrease} className="submitBtn">Yes please</button>
            <button type="button" onClick={handleStepReset} className="restartBtn">No, restart</button>
          </div>
        </>
      )}
      {step === 8 && (
        <>
          <Breathe
            name={name}
            activity={activity}
            colour={colour}
            place={place}
            temp={temp}
            who={who} />
          <button type="button" onClick={handleStepReset} className="restartBtn"> I need a new scenario</button>
        </>
      )}
      {step < 7 && step !== 0 && (
        <button type="button" onClick={handleStepIncrease} className="submitBtn"> Next question </button>
      )}
    </div>
  );
}
