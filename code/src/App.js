/* eslint-disable no-shadow */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Name } from 'components/Name';
import { Gender } from 'components/Gender';
import { Age } from 'components/Age';
import { Food } from 'components/Food';
import { Times } from 'components/Times';
import { Summary } from 'components/Summary';
import { Welcome } from 'components/Welcome';
import AnimatedPage from 'components/AnimatedPage';
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('enter')
    }
  }

  return (
    <AnimatedPage> {/* Makes the first page fade in from the bottom */}
      <div className="content-container">
        <div className="welcome-container">
          {step === 1 && (
            <Welcome welcome={welcome} setWelcome={setWelcome} />
          )}
        </div>
        {step === 2 && (
          <div className="name-container">
            <Name name={name} setName={setName} />
          </div>
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
            <button type="button" id="start" onClick={handleStepIncrease} onKeyDown={(e) => handleKeyDown(e)}>Start</button>
          )}
          {step >= 2 && step <= 6 && (
            <button type="button" id="previous" onClick={handleStepDecrease}>Previous</button>
          )}
          {step >= 2 && step <= 5 && (
            <button type="button" id="next" onClick={handleStepIncrease} onKeyDown={(e) => handleKeyDown(e)}>Next</button>
          )}
          {step === 6 && (
            <button type="submit" id="submit" onClick={handleStepIncrease}>Submit</button>
          )}
          {step === 7 && (
            <button type="button" id="start over" onClick={startOver}>Start over</button>
          )}
        </div>
      </div>
    </AnimatedPage>

  );
}
