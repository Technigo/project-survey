import React from 'react';

const QuestionFive = ({
  questionFiveData,
  questionFive,
  onQuestionFiveChange,
  // eslint-disable-next-line comma-dangle
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{questionFiveData.name}</h2>
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
            value={questionFive}
            onInput={onQuestionFiveChange}
            onChange={onQuestionFiveChange}
          />
          <input
            type='number'
            min='50'
            max='100'
            step='10'
            id='amount'
            name='amount'
            value={questionFive}
            onChange={onQuestionFiveChange}
          />
        </label>
      </div>
      <br />
      <button
        aria-pressed='false'
        aria-label='Go to next question'
        type='submit'
      >
        Next &gt;&gt;
      </button>
    </form>
  );
};

export default QuestionFive;
