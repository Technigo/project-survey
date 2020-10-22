import React from 'react';

const NextButton = ({
  currentState,
  defaultState,
  setSection,
  whatQuestionNext,
}) => {
  const handleNextButton = () => {
    if (currentState !== defaultState) {
      setSection(whatQuestionNext);
    } else {
      alert('Please answer the question before pressing next question');
    }
  };

  return (
    <button
      type="button"
      className="form__next-button"
      onClick={handleNextButton}
    >
      Next question
    </button>
  );
};
export default NextButton;
