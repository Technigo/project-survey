/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

// imports of components
import { Name } from './components/Name/Name';
import { Place } from './components/Place/Place';
import { Animal } from './components/Animal/Animal';
import { Horror } from './components/Horror/Horror';
import { Food } from './components/Food/Food';
import { StoryTime } from './components/StoryTime/StoryTime';

export const App = () => {
  const stepsTotalCount = 5;
  // useStates here
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [animal, setAnimal] = useState('');
  const [horror, setHorror] = useState('');
  const [food, setFood] = useState('');

  // Function for handeling the steps here, this is sent into every component
  const handleStepIncrease = () => {
    setStep(step + 1);
    console.log({ step })
  }

  return (
    <div className="questions-container">
      {step === 1 && (
        <Name
          name={name}
          setName={setName} />
      )}
      {step === 2 && (
        <Place
          place={place}
          setPlace={setPlace} />
      )}
      {step === 3 && (
        <Animal
          animal={animal}
          setAnimal={setAnimal} />
      )}
      {step === 4 && (
        <Horror
          horror={horror}
          setHorror={setHorror} />
      )}
      {step === 5 && (
        <Food
          food={food}
          setFood={setFood} />
      )}
      {step === 6 && (
        <StoryTime
          name={name}
          place={place}
          animal={animal}
          horror={horror}
          food={food} />
      )}

      {step > 1 && step < 6 && (
        <p className="progress-meter">
          <progress value={step} max={stepsTotalCount + 1}>
            {step} of {stepsTotalCount}
          </progress>
          <span>
            <br />
            <b>{step}</b> / {stepsTotalCount}
          </span>
        </p>
      )}

      {step < 6 && (
        <div className="step-btn">
          <button
            type="button"
            onClick={handleStepIncrease}
            disabled={name === '' && food === ''}>
            {step === 1 && 'Create story'}
            {step > 1 && step < 6 && 'Next question'}
          </button>
        </div>
      )}

    </div>
  );
}
