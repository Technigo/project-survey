import React from 'react';

const PreviousButton = ({ setSection, whatQuestionPrevious }) => {
  const handlePreviousButton = () => {
    setSection(whatQuestionPrevious);
  };

  return (
    <button
      type="button"
      className="form__next-button"
      onClick={handlePreviousButton}
    >
      Previous question
    </button>
  );
};
export default PreviousButton;
