import React from 'react';

import './Steps.css';

import Button from 'components/Button/Button';
import { checkValid } from 'actions/buttonOnClick';

const Steps = ({ step, setStep, maxSteps }) => {
  const nextStep = () => {
    // Makes sure that the button is not focused when viewing the next step
    document.querySelector('.steps-right').blur();
    if (checkValid('form')) {
      setStep(step + 1);
    } else {
      // The form is invalid so we activate focus on the input
      document.querySelector('.input').focus();
    }
  };
  const prevStep = () => {
    // Makes sure that the button is not focused when viewing the next step
    document.querySelector('.steps-left').blur();
    if (checkValid('form')) {
      setStep(step - 1);
    } else {
      // The form is invalid so we activate focus on the input
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
