import React from 'react';

const QuestionFive = ({
  questionFiveData,
  questionAnswer,
  onAnswerChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, questionAnswer);
      }}
    >
      <h2 aria-label='Question 5. Lego.'>{questionFiveData.name}</h2>
      <h3>{questionFiveData.title}</h3>
      <div className='slide-container'>
        <label htmlFor='slider'>
          How many pieces <br />
          <input
            type='range'
            min='50'
            max='100'
            step='10'
            id='slider'
            name='slider'
            className='slider'
            value={questionAnswer}
            onInput={onAnswerChange}
            onChange={onAnswerChange}
          />
          <input
            type='number'
            min='50'
            max='100'
            step='10'
            id='amount'
            name='amount'
            value={questionAnswer}
            onChange={onAnswerChange}
          />
        </label>
      </div>
      <br />
      <button aria-pressed='false' aria-label='Go to summary' type='submit'>
        Submit &gt;&gt;
      </button>
    </form>
  );
};

export default QuestionFive;
