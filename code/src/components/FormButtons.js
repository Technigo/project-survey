import React from 'react';

import Button from './Button';
import Submit from './Submit';

const buttonTexts = ['Lets go!', 'Next', 'Next', 'Submit']

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
      {step > 1 && step < 4 && (
        <Button
          btnTxt="Previous"
          onClickAction={goToPrevStep} />
      )}

      {step >= 0 && step < 3 && (
        <Button
          btnTxt={buttonTexts[step]}
          onClickAction={goToNextStep} />
      )}
      {step === 3 && (
        <Submit />
      )}
    </div>
  );
};

export default FormButtons;