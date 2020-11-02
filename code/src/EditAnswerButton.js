import React from 'react';

const EditAnswerButton = ({ onAnswerChange }) => {
  return (
      <div>
        <button className="button"
          type="submit"
          form="surveyForm"
          onClick={() => onAnswerChange()}
        >
          Edit
        </button>
      </div>
     );
};

export default EditAnswerButton;
