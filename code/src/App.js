import React, { useState } from 'react';
import { Name } from './Components/Name';
import { Select } from './Components/Select';
import { Checkbox } from './Components/Checkbox';
import { Location } from './Components/Location';
import { Summary } from './Components/Summary'

export const App = () => {
  const [step, setStep] = useState(1)

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [check, setCheck] = useState(false);
  const [location, setLocation] = useState('');

  return (
    <section className="main-wrapper">
      <div className="survey-wrapper">
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}
        {step === 2 && (
          <Select name={name} reason={reason} setReason={setReason} />
        )}
        {step === 3 && (
          <Checkbox check={check} setCheck={setCheck} />
        )}
        {step === 4 && (
          <Location location={location} setLocation={setLocation} />
        )}
        {step === 5 && (
          <Summary name={name} reason={reason} location={location} />
        )}
        {step <= 4 && (
          <div className="button-div">
            <button type="button" className="next-question-btn" onClick={handleStepIncrease}>Next!</button>
          </div>
        )}
        {step <= 4 && (
          <div className="footer">
            <p>{step}/5</p>
          </div>
        )}
      </div>
    </section>
  );
}
