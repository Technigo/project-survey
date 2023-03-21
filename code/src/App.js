/// ////////// IMPORTS //////////////// ///

import React, { useState } from 'react';
import { Favorite } from './Components/Favorite/Favorite';
import { Grape } from './Components/Grape/Grape';
import { Food } from './Components/Food/Food';
import { Result } from './Components/Result/Result';
import { Price } from './Components/Price/Price';
import { Taste } from './Components/Taste/Taste';
import { Greeting } from './Components/Greeting/Greeting';

/// ////////// MAIN APP //////////////// ///

export const App = () => {
  // --- Here we set the startvalues to the useState //
  const stepsTotalCount = 5
  const [step, setStep] = useState(0);
  const [favorite, setFavorite] = useState('');
  const [grape, setGrape] = useState('');
  const [priceGroup, setPriceGroup] = useState('');
  const [food, setFood] = useState('');
  const [taste, setTaste] = useState('');
  const [greeting] = useState('');

  // --- This is the function that increases nr off steps/questions //
  function handleStepIncrease() {
    setStep(step + 1);
  }

  // --- Here is the start of the questions //
  return (
    <main className="question-container">
      {/* GREETING */}
      {step < 1 && (
        <Greeting greeting={greeting} />
      )}
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
      {step > 0 && step < 6 && (
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
        </>
      )}
      {[0].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            /* disabled={favorite === ''} */
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
      {[1].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            disabled={favorite === ''}
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
      {[2].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            disabled={grape === ''}
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
      {[3].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            disabled={priceGroup === ''}
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
      {[4].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            disabled={food === ''}
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
      {[5].includes(step) && (
        <>
          {/* The button says "next question" until the total amount of steps is more than 5 */}
          <button
            title="Next page button"
            className="submit-button"
            type="button"
            disabled={taste === ''}
            onClick={handleStepIncrease}>
            {step === 0 && 'START SURVEY'}
            {step > 0 && step < stepsTotalCount && 'NEXT QUESTION'}
            {step >= stepsTotalCount && 'SUBMIT'}
          </button>
        </>
      )}
    </main>
  );
}

