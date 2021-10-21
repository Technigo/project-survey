import React from 'react';

const QuestionFive = ({
  questionFiveData,
  questionAnswer,
  onAnswerChange,
  handleSubmit,
  handlePrevButton,
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
      <div className='buttons-container'>
        <button
          aria-label='Go to previously question'
          type='button'
          onClick={handlePrevButton}
        >
          &lt;&lt; Prev
        </button>
        <button aria-label='Go to summary' type='submit'>
          Submit &gt;&gt;
        </button>
      </div>
    </form>
  );
};

export default QuestionFive;
