import React from 'react';

const SubmitButton = ({ currentState, defaultState, setSection }) => {
  const handleSubmitButton = () => {
    if (currentState !== defaultState) {
      setSection('summary');
    } else {
      alert('Please answer the question before pressing next question');
    }
  };

  return (
    <button
      type="submit"
      value="Submit"
      className="form__submit-button"
      onClick={handleSubmitButton}
    >
      Submit
    </button>
  );
};
export default SubmitButton;
