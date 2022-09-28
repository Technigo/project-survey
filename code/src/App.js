import React, { useState } from 'react';

import StartScreen from 'components/StartScreen'
import Name  from 'components/Name';
import Email from 'components/Email';
import Food from 'components/Food';
import Drink from 'components/Drink';
import Result from 'components/Result';


export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <>
      {step === 0 && (
     <StartScreen 
     handleStepIncrease={handleStepIncrease} />
      )}

      {step === 1 && (
        <Name 
        name={name} 
        setName={setName}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease} />
      )}

      {step === 2 && (
        <Email 
        email={email} 
        setEmail={setEmail}
        Result name={name}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease} />
      )}
      
      {step === 3 && (
        <Food 
        food={food} 
        setFood={setFood} 
        handleStepIncrease={handleStepIncrease} 
        handleStepDecrease={handleStepDecrease}/>
      )}

      {step === 4 && (
        <Drink 
        drink={drink} 
        setDrink={setDrink}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease}/>
      )}

      {step >= 5 && (
        <Result 
        name={name} 
        food={food} 
        drink={drink}
        email={email} />
      )}

    </>
  );
}
