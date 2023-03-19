import React, { useState } from 'react';

import { Name } from 'components/Name';
import { Place } from 'components/Place';
import { Food } from 'components/Food';
import { Drink } from 'components/Drink';
import { Party } from 'components/Party';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <div className="survey-container">
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Place place={place} setPlace={setPlace} />
      )}
      {step === 3 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 4 && (
        <Drink drink={drink} setDrink={setDrink} />

      )}
      {step >= 5 && (

        <Party name={name} place={place} food={food} drink={drink} />
      )}
      {step < 5 && (
        <>
          <div className="step-btn">
            <button type="button" onClick={handleStepIncrease}>NEXT</button>
          </div>
          <div className="step">
            <p>PARTYSTEP {step}/5</p>
          </div>
        </>
      )}

    </div>
  );
};
