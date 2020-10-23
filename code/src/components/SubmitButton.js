import React, { useState } from 'react';
import Popup from 'components/Popup';

const SubmitButton = ({ currentState, defaultState, setSection, message }) => {
  const [popup, setPopup] = useState('hidden');

  const handleSubmitButton = () => {
    if (currentState !== defaultState) {
      setSection('summary');
    } else {
      setPopup('showing');
    }
  };

  return (
    <>
      {popup === 'showing' && (
        <Popup message={message} classNames="form__popup" />
      )}

      <button
        type="submit"
        value="Submit"
        className="form__submit-button"
        onClick={handleSubmitButton}
      >
        Submit
      </button>
    </>
  );
};
export default SubmitButton;
