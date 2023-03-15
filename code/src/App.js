/// ////////// IMPORTS //////////////// ///

import React, { useState } from 'react';
import { Favorite } from './Components/Favorite';
import { Grape } from './Components/Grape';
import { Food } from './Components/Food';
import { Result } from './Components/Result';
import { Price } from './Components/Price';
import { Taste } from './Components/Taste';

/// ////////// MAIN APP //////////////// ///

export const App = () => {
  // --- Here we set the startvalues to the useState //
  const stepsTotalCount = 5
  const [step, setStep] = useState(1);
  const [favorite, setFavorite] = useState('');
  const [grape, setGrape] = useState('');
  const [priceGroup, setPriceGroup] = useState('0-18');
  const [food, setFood] = useState('');
  const [taste, setTaste] = useState('');

  // --- This is the function that increases nr off steps/questions //
  function handleStepIncrease() {
    setStep(step + 1);
  }

  // --- Here is the start of the questions //
  return (
    <div className="question-container">
      {/* FAVORITE WINE - TEXT INPUT */}
      {step === 1 && (
        <Favorite favorite={favorite} setFavorite={setFavorite} />
      )}
      {/* YUMMYEST GRAPE - TEXT INPUT */}
      {step === 2 && (
        <Grape grape={grape} setGrape={setGrape} />
      )}
      {/* PRICE GROUP - RADIO BUTTONS */}
      {step === 3 && (
        <Price priceGroup={priceGroup} setPriceGroup={setPriceGroup} />
      )}
      {/* TYPE OF FOOD - TEXT INPUT */}
      {step === 4 && (
        <Food food={food} setFood={setFood} />
      )}
      {/* PREFERRED SCENT - DROPDOWN */}
      {step === 5 && (
        <Taste taste={taste} setTaste={setTaste} />
      )}
      {/* RESULTS - THE ANSWERS ARE DISPLAYED HERE */}
      {step >= 6 && (
        <Result favorite={favorite} grape={grape} group={priceGroup} food={food} taste={taste} />
      )}
      {step < 6 && (
        <>
          {/* This is where the steps are counted and displayed */}
          <p className="steps-text">
            <progress value={step} max={stepsTotalCount + 1}>
              {step} of {stepsTotalCount}
            </progress>
            <span className="count-numbers">
              <b>{step}</b> / {stepsTotalCount}
            </span>
          </p>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button className="submit-button" type="button" onClick={handleStepIncrease}>
            {step < stepsTotalCount ? 'NEXT QUESTION' : 'SUBMIT'}
          </button>
        </>
      )}
    </div>
  );
}