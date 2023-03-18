import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Going } from './Components/Going';
import { Reward } from './Components/Reward';
import { Result } from './Components/Result'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [going, setGoing] = useState('');
  const [reward, setReward] = useState('');

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
            <Going going={going} setGoing={setGoing} />
          )
        }
        {
          step === 3 && (
            <Reward reward={reward} setReward={setReward} />
          )
        }
        {
          step >= 4 && (
            <Result name={name} going={going} reward={reward} />
          )
        }
        {
          step < 3 && (
            <button className="nextStepButton" type="button" onClick={handleStepIncrease}>Next</button>
          )
        }
        {
          step === 3 && (
            <button className="submitButton" type="button" onClick={handleStepIncrease}>Submit</button>
          )
        }
      </div>
    </section>
  );
}
