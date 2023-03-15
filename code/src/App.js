import React, { useState } from 'react';

import { Name } from 'components/Name';
import { FavouritePlace } from 'components/Favouriteplace';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Party } from 'components/Party';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [favoruiteplace, setFavouritePlace] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
 

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
    {step === 1 && (
      <Name name={name} setName={setName} />
    )}
    {step === 2 && (
      <Favouriteplace favoruiteplace={favoruiteplace} setFavouritePlace={setFavouritePlace} />
    )}
    {step === 3 && (
      <Food food={food} setFood={setFood} />
    )}
    {step === 4 && (
      <Drink drink={drink} setDrink={setDrink} />
    )}
    {step >= 5 && (
      <Party name={name} favoruiteplace={favoruiteplace} food={food} drink={drink} />
    )}
    {step > 5 && (
      <>
      <p>Current step: {step}</p>
    <button type="button" onClick={handleStepIncrease}>Next</button>
    </>
    )}
    </>
  );
};
