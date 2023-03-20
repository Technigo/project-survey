import React, { useState } from 'react';
import { Name } from './components/Name';
import { Kilograms } from './components/Kilograms';
import { Level } from './components/Level';
import { Reps } from './components/Reps';
import { Result } from './components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [kilo, setKilo] = useState('');
  const [reps, setReps] = useState('');
  const [level, setLevel] = useState();

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div className="gym_app_container">
      <div className="gym_app">
        {step === 1 && (
          <Level level={level} setLevel={setLevel} />

        )}
        {step === 2 && (
          <Name name={name} setName={setName} />
        )}
        {step === 3 && (
          <div className="page-one-container">
            <p className="page-one-title">All right, </p>
            <p className="page-one-title">{name}</p>
            <p className="page-three-question">Your best at the gym?</p>
            <div className="kg-reps">
              <p className="page-three-kg">kg</p>
              <p className="page-three-reps">reps</p>
            </div>
            <div className="set-kg-reps">
              <Kilograms kilo={kilo} setKilo={setKilo} />
              <Reps className="reps" reps={reps} setReps={setReps} />
            </div>
          </div>
        )}
        {step === 4 && (
          <Result
            name={name}
            kilo={kilo}
            reps={reps}
            level={level} />
        )}
        {step < 4 && (
          <div className="button_container">
            {/* <p>Current step: {step}</p> */}
            <button className="button-next" type="button" onClick={handleStepIncrease}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}
