import React, { useState } from 'react';
import Popup from './Popup';

const SubmitButton = ({ currentState, defaultState, setSection, message }) => {
  const [popup, setPopup] = useState(false);
  const handleSubmitButton = () => {
    if (currentState !== defaultState) {
      setSection('summary');
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      {popup && <Popup message={message} />}
      <button
        type="submit"
        className="submit-button"
        onClick={handleSubmitButton}>Submit form
      </button>
    </>
  )
}

export default SubmitButton;