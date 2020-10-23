import React, { useState } from 'react';
import Popup from 'components/Popup';

const NextButton = ({
  currentState,
  defaultState,
  setSection,
  whatQuestionNext,
  message,
}) => {
  const [popup, setPopup] = useState('hidden');

  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
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
        type="button"
        className="form__next-button"
        onClick={handleNextButton}
      >
        Next question
      </button>
    </>
  );
};
export default NextButton;
