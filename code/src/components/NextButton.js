import React, { useState } from 'react';
import Popup from './Popup';

const NextButton = ({ setSection, currentState, defaultState, whatQuestionNext }) => {
  const [popup, setPopup] = useState(true);
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
    } else {
      setPopup(true)
    }
  }
  return (
    <>
      {popup && <Popup />}
      <button
        type="button"
        className="next-button"
        onClick={handleNextButton}>Next question
      </button>

    </>

  )
}

export default NextButton;