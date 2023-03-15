import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Food } from './Components/Food';
import { Drink } from './Components/Drink';
import { Result } from './Components/Result';
import { Age } from './Components/Age';
import { Taste } from './Components/Taste';

export const App = () => {
  const stepsTotalCount = 5
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [ageGroup, setAgeGroup] = useState('0-18');
  const [drink, setDrink] = useState('');
  const [taste, setTaste] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div className="question-container">
      {/* 1 NAME - TEXT INPUT */}
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {/* 1 FOOD - TEXT INPUT */}
      {step === 2 && (
        <Food food={food} setFood={setFood} />
      )}
      {/* AGE - RADIO BUTTONS */}
      {step === 3 && (
        <Age ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      )}
      {/* DRINK - TEXT INPUT */}
      {step === 4 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 5 && (
        <Taste taste={taste} setTaste={setTaste} />
      )}
      {/* RESULTS - THE VALUES ARE DISPLAYED */}
      {step >= 6 && (
        <Result name={name} food={food} group={ageGroup} drink={drink} taste={taste} />
      )}
      {step < 6 && (
        <>
          <p className="steps-text">
            <progress value={step} max={stepsTotalCount + 1}>
              {step} of {stepsTotalCount}
            </progress>
            <span>
              <b>{step}</b> / {stepsTotalCount}
            </span>
          </p>
          <button className="submit-button" type="button" onClick={handleStepIncrease}>
            {step < stepsTotalCount ? 'Next Question' : 'Submit'}
          </button>
        </>
      )}
    </div>
  );
}