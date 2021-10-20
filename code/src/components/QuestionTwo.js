import React from 'react';

const QuestionTwo = ({
  questionTwoData,
  // onStepChange,
  questionTwoAnswer,
  onQuestionTwoChange,
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
        <div className='input-image-container'>
          <div className='input-container'>
            {questionTwoData.choices.map((choice) => (
              <label key={choice} htmlFor={choice}>
                <input
                  type={questionTwoData.type}
                  value={choice}
                  onChange={onQuestionTwoChange}
                  checked={questionTwoAnswer === choice}
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
            src={questionTwoData.img_url}
            alt='question Two'
            width='200'
            height='140'
          />
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
    </div>
  );
};

export default QuestionTwo;
