import React from 'react';

import Button from './Button';
import Submit from './Submit';

const buttonTexts = ['Lets go!', 'Next', 'Next', 'Next', 'Next', 'Submit']

const FormButtons = ({ step, setStep }) => {
  const goToPrevStep = () => {
    setStep(step - 1)
  }

  const goToNextStep = () => {
    const form = document.querySelector('.buttons-container').closest('form')

    if (form.checkValidity()) {
      setStep(step + 1)
    }
  }

  return (
    <div className="buttons-container">
      {step > 1 && step < 5 && (
        <Button
          btnTxt="Previous"
          onClickAction={goToPrevStep} />
      )}

      {step >= 0 && step < 5 && (
        <Button
          btnTxt={buttonTexts[step]}
          onClickAction={goToNextStep} />
      )}
      {step === 5 && (
        <Submit />
      )}
    </div>
  );
};

export default FormButtons;