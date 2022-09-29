/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import { NameOfDate } from 'components/NameOfDate';
import { LengthOfDating } from 'components/LengthOfDating';
import { FavContinent } from 'components/FavContinent';
import { FoodPreferens } from 'components/FoodPreferens';
import { Budget } from 'components/Budget';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [nameOfDate, setNameOfDate] = useState('');
  const [lengthOfDating, setLengthOfDating] = useState('');
  const [favContinent, setFavContinent] = useState('');
  const [foodPreferens, setFoodPreferens] = useState('');
  const [budget, setBudget] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <NameOfDate nameOfDate={nameOfDate} setNameOfDate={setNameOfDate} />
      )}
      {step === 2 && (
        <LengthOfDating lengthOfDating={lengthOfDating} setLengthOfDating={setLengthOfDating} />
      )}
      {step === 3 && (
        <FavContinent favContinent={favContinent} setFavContinent={setFavContinent} />
      )}
      {step === 4 && (
        <FoodPreferens foodPreferens={foodPreferens} setFoodPreferens={setFoodPreferens} />
      )}
      {step === 5 && (
        <Budget budget={budget} setBudget={setBudget} />
      )}
      {step >= 6 && (
        <Result
          nameOfDate={nameOfDate}
          lengthOfDating={lengthOfDating}
          favContinent={favContinent}
          foodPreferens={foodPreferens}
          budget={budget} />
      )}

      {step < 6 && (
        <>
          <p>Question {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next Question</button>
        </>
      )}
    </>
  );
}