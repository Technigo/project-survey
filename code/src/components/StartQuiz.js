import React from 'react';

const StartQuiz = ({ startQuizText, onStepChange }) => {
  return (
    <>
      <h2>{startQuizText}</h2>
      <button type='button' onClick={onStepChange} aria-pressed='false'>
        Start Quiz
      </button>
    </>
  );
};

export default StartQuiz;
