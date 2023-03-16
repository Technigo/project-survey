/* eslint-disable indent */
import React, { useState } from 'react';
import './index.css';
import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Result } from 'components/Result';
/* import { AddMoreButton } from 'components/AddMoreButton'; */
import { ExtraItem } from 'components/ExtraItem';
import Header from './components/Header'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [extraItem, setExtraItem] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
     <Header />
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
        <ExtraItem extraItem={extraItem} setExtraItem={setExtraItem} />
       )}
      {step >= 4 && (
        <Result name={name} food={food} drink={drink} />
      )}
    {step < 4 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Trick me {step}</button>
        </>
      )}
    </>
  );
}