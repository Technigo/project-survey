import React from 'react';

const QuestionOne = ({
  questionOneData,
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
      <h2 aria-label='Question 1. Movie'>{questionOneData.name}</h2>
      <h3>{questionOneData.title}</h3>
      <div className='input-image-container'>
        <div className='input-container'>
          {questionOneData.choices.map((choice) => (
            <label key={choice} htmlFor={choice}>
              <input
                type={questionOneData.type}
                value={choice}
                onChange={onAnswerChange}
                checked={questionAnswer === choice}
                required
                id={choice}
                name='choice'
              />
              {choice}
              <br />
            </label>
          ))}
        </div>
        <img
          src={questionOneData.img_url}
          alt='Question one. Lego figures floating in a gravity fight scene.'
          width='200'
          height='160'
        />
      </div>
      <br />
      <button
        aria-label='Go to next question'
        // need a submit button because of the form
        type='submit'
      >
        Next &gt;&gt;
      </button>
    </form>
  );
};

export default QuestionOne;
