/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import data from './data.json';
import Starter from './components/Starter';
import Name from './components/Name';
import Type from './components/Type';
import Genre from './components/Genre';
import Score from './components/Score';
import Apocalypse from './components/Apocalypse';
import Summary from './components/Summary';
import Result from './components/Result';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('Surprise me!');
  const [genre, setGenre] = useState('Surprise me!');
  const [score, setScore] = useState(7.5);
  const [apocalypse, setApocalypse] = useState(false);

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  const handleStepReset = () => {
    setStep(0);
    setName('');
    setType('Surprise me!');
    setGenre('Surprise me!');
    setScore(7.5);
    setApocalypse(false);
  };

  // For navigating by enter key:
  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === 'Enter') {
        if (step === 7) {
          handleStepReset();
        } else {
          handleStepIncrease();
        }
      }
    };
    document.addEventListener('keydown', handleEnterKey);
    return () => {
      document.removeEventListener('keydown', handleEnterKey);
    };
  });

  return (
    <>
      <div className="container main">
        {step === 0 && <Starter onButtonClick={() => handleStepIncrease(0)} />}
        {step === 1 && <Name name={name} setName={setName} step={step} />}
        {step === 2 && <Type type={type} setType={setType} step={step} />}
        {step === 3 && <Genre genre={genre} setGenre={setGenre} step={step} />}
        {step === 4 && <Score score={score} setScore={setScore} step={step} />}
        {step === 5 && <Apocalypse apocalypse={apocalypse} setApocalypse={setApocalypse} step={step} />}
        {step < 6 && step !== 0 && (
          <div className="next-step">
            <button type="button" onClick={handleStepIncrease} aria-label="Button named Next Step">
                Next step
            </button>
            <button type="button" onClick={handleStepReset} aria-label="Button named Reset All">
                Reset All
            </button>
          </div>
        )}
        {step === 6 && (
          <>
            <Summary name={name} type={type} genre={genre} score={score} apocalypse={apocalypse} />
            <button type="button" onClick={handleStepIncrease} className="yes-btn" aria-label="Button named Yes">Yes!</button>
          </>
        )}
        {step === 7 && (
          <>
            <Result type={type} genre={genre} score={score} apocalypse={apocalypse} data={data} />
            <button type="button" onClick={handleStepReset} className="start-over-btn" aria-label="Button named Start over">Start over</button>
          </>
        )}
      </div>
      <footer>
        <hr />
        <p>This site is created by <a href="https://www.linkedin.com/in/matilda-frid-7923bb88/" target="_blank" rel="noreferrer" aria-label="Link to Matilda Frids Linkedin">Matilda Frid.</a></p>
      </footer>
    </>
  );
}
