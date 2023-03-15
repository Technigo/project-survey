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
          setName={setName}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 2 && (
        <Place
          place={place}
          setPlace={setPlace}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 3 && (
        <Animal
          animal={animal}
          setAnimal={setAnimal}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 4 && (
        <Horror
          horror={horror}
          setHorror={setHorror}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 5 && (
        <Food
          food={food}
          setFood={setFood}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 6 && (
        <StoryTime
          name={name}
          place={place}
          animal={animal}
          horror={horror}
          food={food} />
      )}
    </div>
  );
}
