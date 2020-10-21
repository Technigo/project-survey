import React from 'react';

const NextButton = (props) => {
  const handleNextButton = () => {
    props.setSection(props.whatQuestionNext);
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
