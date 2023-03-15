/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Gender } from 'components/Gender';
import { Age } from 'components/Age';
import { Food } from 'components/Food';
import { Times } from 'components/Times';
import { Summary } from 'components/Summary';
import { Welcome } from 'components/Welcome';
import './index.css';

export const App = () => {
  const [step, setStep] = useState(1);
  const [welcome, setWelcome] = useState('false');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [food, setFood] = useState('');
  const [times, setTimes] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
    setWelcome(true);
  }
  const handleStepDecrease = () => {
    setStep(step - 1);
  }
  const startOver = () => {
    setStep(step && 1);
  }

  return (
    <div className="content-container">
      {step === 1 && (
        <div className="welcome-container">
          <Welcome welcome={welcome} setWelcome={setWelcome} />
        </div>
      )}
      {step === 2 && (
        <Name name={name} setName={setName} />
      )}
      {step === 3 && (
        <Gender gender={gender} setGender={setGender} />
      )}
      {step === 4 && (
        <Age age={age} setAge={setAge} />
      )}
      {step === 5 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 6 && (
        <Times times={times} setTimes={setTimes} food={food} />
      )}
      {step >= 7 && (
        <Summary name={name} gender={gender} age={age} food={food} times={times} />
      )}
      <div className="buttons">
        {step === 1 && (
          <button type="button" id="start" onClick={handleStepIncrease}>Start</button>
        )}
        {step >= 2 && step <= 6 && (
          <button type="button" id="previous" onClick={handleStepDecrease}>Previous</button>
        )}
        {step >= 2 && step <= 5 && (
          <button type="button" id="next" onClick={handleStepIncrease}>Next</button>
        )}
        {step === 6 && (
          <button type="button" id="submit" onClick={handleStepIncrease}>Submit</button>
        )}
        {step === 7 && (
          <button type="button" id="start over" onClick={startOver}>Start over</button>
        )}
      </div>
    </div>

  );
}
