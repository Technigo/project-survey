import React from 'react';

const QuestionRadioBtn = ({
  questionData,
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
      <h2 aria-label='Topic. Movie.'>{questionData.name}</h2>
      <h3>{questionData.title}</h3>
      <div className='input-image-container'>
        <div className='input-container'>
          {questionData.choices.map((choice) => (
            <label key={choice} htmlFor={choice}>
              <input
                type={questionData.type}
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
          src={questionData.img_url}
          alt={questionData.img_alt}
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
        <button
          aria-label='Go to next question'
          // need a submit button because of the form
          type='submit'
        >
          Next &gt;&gt;
        </button>
      </div>
    </form>
  );
};

export default QuestionRadioBtn;
