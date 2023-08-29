import React, { useState } from 'react';
import Popup from './Popup';

const NextButton = ({ currentState, defaultState, whatQuestionNext }) => {
  const [popup, setPopup] = useState(true);
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      SVGComponentTransferFunctionElement(whatQuestionNext);
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