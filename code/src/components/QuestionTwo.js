import React from 'react';

const QuestionTwo = ({
  questionTwoData,
  // onStepChange,
  questionTwoAnswer,
  onQuestionTwoChange,
  // eslint-disable-next-line comma-dangle
  handleSubmit,
}) => {
  // console.log('questionOneData: ', questionOneData);
  // console.log('name: ', questionOneData.questionOneData.name);
  // console.log('title: ', questionOneData.questionOneData.title);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{questionTwoData.name}</h2>
        <h3>{questionTwoData.title}</h3>
        {questionTwoData.choices.map((choice) => (
          <label key={choice} htmlFor={choice}>
            <input
              type={questionTwoData.type}
              value={choice}
              onChange={onQuestionTwoChange}
              checked={questionTwoAnswer === choice}
              required
              name='choice'
            />
            {choice}
            <br />
          </label>
        ))}
        <img
          src={questionTwoData.img_url}
          alt='question Two'
          width='200'
          height='140'
        />
        <br />
        <button
          aria-pressed='false'
          aria-label='Go to next question'
          type='submit'
        >
          Next &gt;&gt;
        </button>
      </form>
    </div>
  );
};

export default QuestionTwo;
