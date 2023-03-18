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
import { FlowerSelect } from 'components/FlowerSelect'; 
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
  const [flowerSelect, setFlowerSelect] = useState() 

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
        <FlowerSelect flowerSelect={flowerSelect} setFlowerSelect={setFlowerSelect} />
      )} 
      {step === 8 && (
        <ExtraItem ExtraItem={extraItem} setExtraItem={setExtraItem} />
        )}
      {step === 9 && (
        <Result name={name} food={food} drink={drink} fruit={fruitSelect} topping={toppingSelect} />
      )}
    {step < 10 && (
        <div className="content-wrapper">
          <p>Question number {step}/{10}</p>
          <button className="button-wrapper" type="button" onClick={handleStepIncrease}>
          {step === 1 && 'YAY LETS GO! 🦄!!'}
          {step > 1 && step < 7 && 'Next question 🦄'}
          {step === 8 && 'Find out my magical pony name! 🦄'}
          {step >= 9 && 'Lets do this one more time!🦄'}
          {step === 7 && 'Submit! 🦄'}
          </button>
        </div>
      )}
    </>
  );
}

