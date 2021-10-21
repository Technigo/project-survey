import React from 'react';

const QuestionFour = ({
  questionFourData,
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
      <h2 aria-label='Question 4. Decode emojis.'>{questionFourData.name}</h2>
      <h3>{questionFourData.title}</h3>
      <div className='input-image-container'>
        <div className='example-container'>
          <p>Example:</p>
          <span
            role='img'
            aria-label='Emojis of. Emoji 1. Eye. Emoji 2. Key. Emoji 3. Letter A.'
            className='fourthQ-emojis'
          >
            👁️🔑🅰️
          </span>
          <p>IKEA (eye-key-a)</p>
        </div>
        <div>
          <p>Who is the singer of this song?</p>
          <span
            role='img'
            aria-label='Emojis of. Emoji 1. Thumbs up. Emoji 2. Letter A. Emoji 3. Bride.'
            className='fourthQ-emojis'
          >
            👍🅰️👰
          </span>
          <br /> <br />
          <select onChange={onAnswerChange} required>
            <option value=''>select option:</option>
            {questionFourData.choices.map((choice) => (
              <option key={choice} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>
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

export default QuestionFour;
