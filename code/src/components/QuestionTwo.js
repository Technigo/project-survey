import React from 'react';

const QuestionTwo = ({
  questionTwoData,
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
      <h2 aria-label='Question 2. Movie'>{questionTwoData.name}</h2>
      <h3>{questionTwoData.title}</h3>
      <div className='input-image-container'>
        <div className='input-container'>
          {questionTwoData.choices.map((choice) => (
            <label key={choice} htmlFor={choice}>
              <input
                type={questionTwoData.type}
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
          src={questionTwoData.img_url}
          alt='Question two. Lego figures dancing. Doing a lift.'
          width='200'
          height='140'
        />
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
        <button aria-label='Go to next question' type='submit'>
          Next &gt;&gt;
        </button>
      </div>
    </form>
  );
};

export default QuestionTwo;
