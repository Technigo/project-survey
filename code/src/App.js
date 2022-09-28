import React, { useState } from 'react';

import Question1 from 'components/Question1';
import Question2 from 'components/Question2';
import Question3 from 'components/Question3';
import Summary from 'components/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  const handleStepIncrese = (shouldIncrese) => {
    shouldIncrese.preventDefault();
    if (shouldIncrese && step < 4) {
      setStep(step + 1)
    }
  }

  // const checkKeyPress = (event) => {
  //   const { key, keyCode } = event;
  //   console.log(key, keyCode);
  //   if (keyCode === 13) {
  //     setStep(step + 1)
  //   }
  // };

  return (
    <div className="outer-wrapper">
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
          <Summary name={name} question2={question2} question3={question3} />
        )}
      </div>
      <div>
        {/* <input value={step} onChange={handleStepIncrese} onKeyDown={checkKeyPress} /> */}
        <button type="button" onClick={handleStepIncrese}>Next page</button>
        <p>Current step: {step}</p>
      </div>
    </div>
  );
}
