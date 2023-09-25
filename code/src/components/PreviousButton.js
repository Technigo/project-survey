/* eslint-disable max-len */
import React from 'react';

const PreviousButton = ({ setStep, whatStepBefore, setSection, whatQuestionPrevious }) => {
  const handlePreviousButton = () => {
    setSection(whatQuestionPrevious);
    setStep(whatStepBefore)
  };
  return (
    <button
      type="button"
      className="button"
      onClick={handlePreviousButton}>Go back
    </button>
  )
}

export default PreviousButton;