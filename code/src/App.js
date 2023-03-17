import React, { useState } from 'react';
import './index.js'
import './index.css'

import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Century } from 'components/Century';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('')
  const [food, setFood] = useState(false)
  const [drink, setDrink] = useState('')
  const [century, setCentury] = useState('1533-1577')
  const handleStepIncrease = () => { 
    setStep(step + 1);
  }
  return (

  //  <input onChange={event => event.preventDefault()} />

    <div>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 4 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 3 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 2 && (
        <Century century={century} setCentury={setCentury} />
      )}
      {step >= 5 && (
        <Result name={name} food={food} drink={drink} century={century} />
      )}
      {step < 5 && (
        <div>
          <p> Current step: {step}</p>

          <button type="button" onClick={handleStepIncrease}> Next step </button>



        </div>
      )}
    </div>
  );
} 
