import React, { useState } from 'react';

import Question1 from 'components/Question1';
import Question2 from 'components/Question2';
import Question3 from 'components/Question3';
import Summary from 'components/Summary';

export const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [userInput, setUserInput] = useState('');
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  // const handleUserInputChange = (event) => {
  //   setUserInput(event.target.value)
  // }

  const handleStepIncrese = (shouldIncrese) => {
    shouldIncrese.preventDefault();
    if (shouldIncrese) {
      setStep(step + 1)
    }
  }

  // const checkKeyPress = (e) => {
  //   const { key, keyCode } = e;
  //   console.log(key, keyCode);
  //   if (keyCode === 13) {
  //     setStep(step + 1)
  //   }
  // };

  return (
    <>
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
        {/* <input type="text" value={userInput} onChange={handleUserInputChange} />
        <p> {userInput}
        </p> */}
      </div>

    </>
  );

// comp question 1
// comp question 2
// comp summary
}
