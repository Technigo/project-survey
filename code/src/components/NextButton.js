/* eslint-disable max-len */
import React, { useState } from 'react';
import Alert from './Alert';

const NextButton = ({ setStep, whatStepNext, setSection, currentState, defaultState, whatQuestionNext, message }) => {
  const handleNextStep = () => {
    setStep(whatStepNext)
  };
  const [alert, setAlert] = useState(false);
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
      handleNextStep();
    } else {
      setAlert(true)
    }
  };
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={handleNextButton}>Next question
      </button>
      {alert && <Alert message={message} />}
    </>

  )
}

export default NextButton;