/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { NameOfDate } from 'components/NameOfDate';
import { LengthOfDating } from 'components/LengthOfDating';
import { FavContinent } from 'components/FavContinent';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [nameOfDate, setNameOfDate] = useState('');
  const [lengthOfDating, setLengthOfDating] = useState('');
  const [favContinent, setFavContinent] = useState('');

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
      {step >= 4 && (
        <Result
          nameOfDate={nameOfDate}
          lengthOfDating={lengthOfDating}
          favContinent={favContinent} />
      )}

      {step < 4 && (
        <>
          <p>Question {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next Question</button>
        </>
      )}
    </>
  );
}