/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { WelcomeMessage } from 'components/WelcomeMessage';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      <WelcomeMessage />
      <div className="questionCounter">
        <p>
            Current question: {step}
          <button className="nextButton" type="button" onClick={handleStepIncrease}>Next question</button>
        </p>
      </div>
    </>

  );
}

