import React, { useState } from 'react';
import { Name } from 'Components/Name';
import { Sandwich } from 'Components/Sandwich';
import { Pancakes } from 'Components/Pancakes';
import { Drink } from 'Components/Drink';
import { Rate } from 'Components/Rate';
import { Result } from 'Components/Result';
import { Header } from 'Components/Header';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [sandwich, setSandwich] = useState('');
  const [pancakes, setPancakes] = useState('');
  const [rate, setRate] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <section>
          <Header />
          <Name name={name} setName={setName} />
        </section>
      )}
      {step === 2 && (
        <Sandwich sandwich={sandwich} setSandwich={setSandwich} />
      )}
      {step === 3 && (
        <Pancakes pancakes={pancakes} setPancakes={setPancakes} />
      )}
      {step === 4 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 5 && (
        <Rate rate={rate} setRate={setRate} />
      )}
      {step >= 6 && (
        <Result name={name} sandwich={sandwich} pancakes={pancakes} drink={drink} rate={rate} />
      )}

      {step < 6 && (
        <div className="buttonContainer">
          <button className="button" type="button" onClick={handleStepIncrease}>GO!</button>
        </div>
      )}
    </>
  );
}
