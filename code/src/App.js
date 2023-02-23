import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Mood } from './Components/Mood';
import { Drink } from './Components/Drink';
import { Result } from './Components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <section className="outerWrapper">
      <div>
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}
        {
          step === 2 && (
            <Mood mood={mood} setMood={setMood} />
          )
        }
        {
          step === 3 && (
            <Drink drink={drink} setDrink={setDrink} />
          )
        }
        {
          step >= 4 && (
            <Result name={name} mood={mood} drink={drink} />
          )
        }
        {
          step < 3 && (
            <button className="nextStepButton" type="button" onClick={handleStepIncrease}>Next step</button>
          )
        }
        {
          step === 3 && (
            <button className="submitButton" type="button" onClick={handleStepIncrease}>Submit answer:</button>
          )
        }
      </div>
    </section>
  );
}
