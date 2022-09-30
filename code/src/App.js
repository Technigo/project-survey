import React, { useState } from 'react';

import Start from 'components/Start';
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

  const handleStepIncrese = (element, choicemade) => {
    if (!choicemade) {
      return;
    }
    if (element !== undefined) {
      element.preventDefault();
    }
    if (step < 7) {
      setStep(step + 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div id="nextStep">
          {step === 1 && (
            <Start
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 2 && (
            <Question1
              name={name}
              setName={setName}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 3 && (
            <Question2
              question2={question2}
              setQuestion2={setQuestion2}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 4 && (
            <Question3
              question3={question3}
              setQuestion3={setQuestion3}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 5 && (
            <Question4
              question4={question4}
              setQuestion4={setQuestion4}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div id="nextStep">
          {step === 6 && (
            <Summary
              name={name}
              question2={question2}
              question3={question3}
              question4={question4}
              handleStepIncrese={handleStepIncrese} />
          )}
        </div>
        <div>
          {step === 7 && (
            <p>Thank you for your time!</p>
          )}
        </div>

      </div>
    </div>
  );
}
