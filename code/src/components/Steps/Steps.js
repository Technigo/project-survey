import React from 'react';

import './Steps.css';

import Button from 'components/Button/Button';

const Steps = ({ step, setStep, maxSteps }) => {
  return (
    <div className="steps-wrapper">
      {step !== 1 && (
        <Button otherClassName="steps-left" isSubmit={false} text="<<" action={() => setStep(step - 1)} />
      )}
      <h4 className="steps-text">{`${step} of ${maxSteps}`}</h4>
      {step !== maxSteps && (
        <Button otherClassName="steps-right" isSubmit={false} text=">>" action={() => setStep(step + 1)} />
      )}
    </div>
  );
};

export default Steps;
