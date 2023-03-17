import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Workplace } from 'components/Workplace';
import { Time } from 'components/Time';
import { Feedback } from 'components/Feedback';
import { Slider } from 'components/Slider'
import { Summary } from 'components/Summary';

import './index.css';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [time, setTime] = useState('');
  const [feedback, setFeedback] = useState('');
  const [slider, setSlider] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStepIncrease = () => {
    const increment = 100 / 5;
    setStep(step + 1);
    setProgress(progress + increment);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="survey">
      <h1>Welcome to this survey about your workplace!</h1>
      {submitted ? (
        // eslint-disable-next-line max-len
        <Summary name={name} workplace={workplace} time={time} feedback={feedback} slider={slider} />
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
          {step === 5 && (
            <Slider slider={slider} setSlider={setSlider} />
          )}
          {step < 6 && (
            <div className="survey-button">
              <button type="button" className="next-button" onClick={handleStepIncrease}>Next question</button>
            </div>
          )}
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}% ` }} />
            {progress}%
          </div>
          {step === 6 && (
            <form onSubmit={handleSubmit}>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>

  );
}