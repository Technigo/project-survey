/* eslint-disable max-len */
import React, { useState } from 'react';
import Popup from './Popup';

const NextButton = ({ setStep, whatStepNext, setSection, currentState, defaultState, whatQuestionNext, message }) => {
  const handleNextStep = () => {
    setStep(whatStepNext)
  };
  const [popup, setPopup] = useState(false);
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
      handleNextStep();
    } else {
      setPopup(true)
    }
  };
  return (
    <div className="form__button__popup__wrapper">
      <button
        type="button"
        className="button"
        onClick={handleNextButton}>Next question
      </button>
      {popup && <Popup message={message} />}
    </div>

  )
}

export default NextButton;