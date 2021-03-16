import React, { useState } from 'react';

import Popup from './Popup';

const NextQuestionButton = ({
  currentState,
  defaultState,
  setPage,
  whatQuestionNext,
  message,
}) => {
  const [popup, setPopup] = useState(false);

  const onNextQuestionButton = () => {
    if (currentState !== defaultState) {
      setPage(whatQuestionNext); //check how this is connected to firstQuestion and so on ---> and change the name
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      {popup && <Popup message={message} classNames="form-popup" />}

      <button
        type="button"
        aria-label="button to the next question"
        className="next-button"
        onClick={onNextQuestionButton}
      >
        Next question
      </button>
    </>
  );
};
export default NextQuestionButton