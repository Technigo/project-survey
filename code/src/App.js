/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { DestinationQuestion } from './components/DestinationQuestion'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState('')
  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div className="wrapper">
      <WelcomeMessage />
      <DestinationQuestion />
      <div className="questionCounter">
        <p>
            Current question: {step}
          <button className="nextButton" type="button" onClick={handleStepIncrease}>Next question</button>
        </p>
      </div>
    </div>

  );
}

