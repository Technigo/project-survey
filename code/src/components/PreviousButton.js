import React from 'react';

const PreviousButton = (props) => {
  const handlePreviousButton = () => {
    props.setSection(props.whatQuestionPrevious);
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
