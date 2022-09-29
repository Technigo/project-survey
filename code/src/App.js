import React, { useState } from 'react';

import Question1 from 'components/Question1';
import Question2 from 'components/Question2';
import Question3 from 'components/Question3';
import Question4 from 'components/Question4';
import Summary from 'components/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');

  const handleStepIncrese = (shouldIncrese) => {
    shouldIncrese.preventDefault();
    if (shouldIncrese && step < 6) {
      setStep(step + 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div>
          {step === 1 && (
            <Question1 name={name} setName={setName} />
          )}
        </div>
        <div>
          {step === 2 && (
            <Question2 question2={question2} setQuestion2={setQuestion2} />
          )}
        </div>
        <div>
          {step === 3 && (
            <Question3 question3={question3} setQuestion3={setQuestion3} />
          )}
        </div>
        <div>
          {step === 4 && (
            <Question4 question4={question4} setQuestion4={setQuestion4} />
          )}
        </div>
        <div>
          {step === 5 && (
            <div><Summary
              name={name}
              question2={question2}
              question3={question3}
              question4={question4} />
            <button type="submit" onClick={handleStepIncrese}>Submit form</button>
            </div>
          )}
        </div>
        <div>
          {step === 6 && (
            <p>Thank you for your time!</p>
          )}
        </div>
        <div>
          <button type="button" onClick={handleStepIncrese}>Next page</button>
          <p>Step {step} out of 4</p>
        </div>
      </div>
    </div>
  );
}
