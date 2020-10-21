import React from 'react';

const EditAnswerButton = ({ onAnswerChange }) => {
  return (
      <section className="edit-answer-button">
        <button 
          type="submit"
          form="surveyForm"
          onClick={() => onAnswerChange()}
        >
          Edit answers
        </button>
      </section>
     );
}
 
export default EditAnswerButton;