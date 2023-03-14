import React, { useState } from 'react';
import './index.js'
import './index.css'

import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Wheapon } from 'components/Wheapon';
import { Century } from 'components/Century';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('')
  const [food, setFood] = useState('')
  const [drink, setDrink] = useState('')
  const [wheapon, setWheapon] = useState('')
  const [century, setCentury] = useState('1953-1577')
  const handleStepIncrease = () => { 
    setStep(step + 1);
  }
  return (

  // <input onChange={event => event.preventDefault()}>

    <div>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 3 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 4 && (
        <Wheapon wheapon={wheapon} setWheapon={setWheapon} />
      )}

{step === 5 && (
        <Century century={century} setCentury={setCentury} />
      )}
      {step >= 6 && (
        <Result name={name} food={food} drink={drink} />
      )}
      {step < 6 && (
        <div>
          <p> Current step: {step}</p>

          <button type="button" onClick={handleStepIncrease}> Next step </button>



        </div>
      )}
    </div>
  );
} 
