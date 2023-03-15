import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Workplace } from 'components/Workplace';
import { Time } from 'components/Time';
import { Feedback } from 'components/Feedback';

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

  if (submitted) {
    return (
      <div className="survey-result">
        <h2>Summary</h2>
        <p>Name: {name}</p>
        <p>Workplace: {workplace}</p>
        <p>Time at workplace: {time}</p>
        <p>Feedback: {feedback}</p>

      </div>
    );
  }

  return (
    <div className="survey">
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
        <p>
    Current step: {step}
        </p>
        <button type="button" onClick={handleStepIncrease}>Next step</button>

      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}