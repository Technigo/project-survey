import React, { useState } from 'react';
import Popup from './Popup';

const NextButton = ({ setSection, currentState, defaultState, whatQuestionNext, message }) => {
  const [popup, setPopup] = useState(false);
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
    } else {
      setPopup(true)
    }
  }
  return (
    <>
      {popup && <Popup message={message} />}
      <button
        type="button"
        className="next-button"
        onClick={handleNextButton}>Next question
      </button>

    </>

  )
}

export default NextButton;