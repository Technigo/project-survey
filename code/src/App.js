import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Workplace } from 'components/Workplace';
import { Time } from 'components/Time';
import { Feedback } from 'components/Feedback';
import { Summary } from 'components/Summary';

import './index.css';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [time, setTime] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="survey">
      <h1>Welcome to this survey about your job!</h1>
      {submitted ? (
        <Summary name={name} workplace={workplace} time={time} feedback={feedback} />
      ) : (
        <div className="result-container">
          {step === 1 && (
            <Name name={name} setName={setName} />
          )}
          {step === 2 && (
            <Workplace workplace={workplace} setWorkplace={setWorkplace} />
          )}
          {step === 3 && (
            <Time time={time} setTime={setTime} />
          )}
          {step === 4 && (
            <Feedback feedback={feedback} setFeedback={setFeedback} />
          )}
          {step < 4 && (
            <div className="survey-button">
              <button type="button" className="next-button" onClick={handleStepIncrease}>Next question</button>
            </div>
          )}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>

  );
}