import React from 'react';

import './Steps.css';

import Button from 'components/Button/Button';
import { checkValid } from 'actions/buttonOnClick';

const Steps = ({ step, setStep, maxSteps }) => {
  const nextStep = () => {
    if (checkValid('form')) {
      setStep(step + 1);
    } else {
      document.querySelector('.input').focus();
    }
  };
  const prevStep = () => {
    if (checkValid('form')) {
      setStep(step - 1);
    } else {
      document.querySelector('.input').focus();
    }
  };

  return (
    <div className="steps-wrapper">
      {step !== 1 && (
        <Button
          otherClassName="steps-left"
          isSubmit={false}
          text="<<"
          action={() => prevStep()} />
      )}
      <h4 className="steps-text">{`${step} of ${maxSteps}`}</h4>
      {step !== maxSteps && (
        <Button
          otherClassName="steps-right"
          isSubmit={false}
          text=">>"
          action={() => nextStep()} />
      )}
    </div>
  );
};

export default Steps;
