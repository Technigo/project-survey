import React from 'react';

const SubmitButton = (props) => {
  const handleSubmitButton = () => {
    props.setSection('summary');
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
