import React from 'react';

const QuestionOne = ({
  questionOneData,
  questionOneAnswer,
  onQuestionOneChange,
  // eslint-disable-next-line comma-dangle
  handleSubmit,
}) => {
  // console.log('questionOneData: ', questionOneData);
  // console.log('name: ', questionOneData.questionOneData.name);
  // console.log('title: ', questionOneData.questionOneData.title);
  return (
    <div>
      {/* onSubmit={(event) => event.preventDefault()} */}
      {/* onSubmit={onStepChange} */}
      <form onSubmit={handleSubmit}>
        <h2>{questionOneData.name}</h2>
        <h3>{questionOneData.title}</h3>
        {questionOneData.choices.map((choice) => (
          <label key={choice} htmlFor={choice}>
            <input
              type={questionOneData.type}
              value={choice}
              onChange={onQuestionOneChange}
              checked={questionOneAnswer === choice}
              // required={choice[0]}
              required
              name='choice'
            />
            {choice}
            <br />
          </label>
        ))}
        <img
          src={questionOneData.img_url}
          alt='question one'
          width='200'
          height='160'
        />
        <br />
        <button
          aria-pressed='false'
          aria-label='Go to next question'
          type='submit'
        >
          Next &gt;&gt;
        </button>
        {/* <button type='button' onClick={onStepChange}>
          Next &gt;&gt;
        </button> */}
      </form>
    </div>
  );
};

export default QuestionOne;
