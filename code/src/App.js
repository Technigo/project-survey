/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useState } from 'react';
import './index.css';
import { Name } from 'components/Name';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Result } from 'components/Result';
/* import { AddMoreButton } from 'components/AddMoreButton'; */
import { ExtraItem } from 'components/ExtraItem';
import { FruitSelect } from 'components/FruitSelect';
import { ToppingSelect } from 'components/ToppingSelect';
import Header from './components/Header'
import Start from './components/Start';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [extraItem, setExtraItem] = useState('');
  const [fruitSelect, setFruitSelect] = useState('');
  const [toppingSelect, setToppingSelect] = useState('')

/*   const start = () => {
    setStart(start + 1);
  } */

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
     <Header />

      {step === 1 && (
        <Start />
      )}
      {step === 2 && (
        <Name name={name} setName={setName} />
      )}
      {step === 3 && (
      <FruitSelect fruitSelect={fruitSelect} setFruitSelect={setFruitSelect} />
      )}
      {step === 4 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 5 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 6 && (
        <ToppingSelect ToppingSelect={toppingSelect} setToppingSelect={setToppingSelect} />
       )}
      {step === 7 && (
        <ExtraItem ExtraItem={extraItem} setExtraItem={setExtraItem} />
        )}

      {step === 8 && (
        <Result name={name} food={food} drink={drink} />
      )}
    {step < 8 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>
          {step === 1 && 'YAY LETS GO! 🦄!!'}
          {step > 1 && step < 7 && 'Next question'}
          {step === 7 && 'Find out my magical pony name! 🦄'}
          </button>
        </>
      )}
    </>
  );
}
