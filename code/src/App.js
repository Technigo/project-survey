/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import { NameOfDate } from 'components/NameOfDate';
import { LengthOfDating } from 'components/LengthOfDating';
import { Allergies } from 'components/Allergies';
import { FoodPreferens } from 'components/FoodPreferens';
import { FavContinent } from 'components/FavContinent';
import { Budget } from 'components/Budget';
import { Result } from 'components/Result';
import Header from './components/Header';

export const App = () => {
  const [step, setStep] = useState(1);
  const [nameOfDate, setNameOfDate] = useState('');
  const [allergies, setAllergies] = useState('');
  const [lengthOfDating, setLengthOfDating] = useState('');
  const [foodPreferens, setFoodPreferens] = useState('');
  const [favContinent, setFavContinent] = useState('');
  const [budget, setBudget] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div className="mainContainer">
      <header>
        <Header />
      </header>
      <div className="surveyContainer">
        {step === 1 && (
          <NameOfDate nameOfDate={nameOfDate} setNameOfDate={setNameOfDate} />
        )}
        {step === 2 && (
          <LengthOfDating lengthOfDating={lengthOfDating} setLengthOfDating={setLengthOfDating} />
        )}
        {step === 3 && (
          <Allergies allergies={allergies} setAllergies={setAllergies} />
        )}
        {step === 4 && (
          <FoodPreferens foodPreferens={foodPreferens} setFoodPreferens={setFoodPreferens} />
        )}
        {step === 5 && (
          <FavContinent favContinent={favContinent} setFavContinent={setFavContinent} />
        )}
        {step === 6 && (
          <Budget budget={budget} setBudget={setBudget} />
        )}
        {step >= 7 && (
          <Result
            nameOfDate={nameOfDate}
            lengthOfDating={lengthOfDating}
            allergies={allergies}
            foodPreferens={foodPreferens}
            favContinent={favContinent}
            budget={budget} />
        )}

        {step < 7 && (
          <div className="stepCounter">
            <p>Question {step}</p>
            <button className="nextQuestion" type="button" onClick={handleStepIncrease} tabIndex="0">Next Question</button>
          </div>
        )}
      </div>
    </div>
  );
}