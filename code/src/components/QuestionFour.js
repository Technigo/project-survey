import React from 'react';

const QuestionFour = ({
  questionFourData,
  onQuestionFourChange,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{questionFourData.name}</h2>
        <h3>{questionFourData.title}</h3>
        <p>Example:</p>
        <span role='img' aria-label='emojis' className='fourthQ-emojis'>
          👁️🔑🅰️
        </span>
        <p>IKEA (eye-key-a)</p>
        <p>Who is the singer of this song?</p>
        <span role='img' aria-label='emojis' className='fourthQ-emojis'>
          👍🅰️👰
        </span>
        <br />
        <select onChange={onQuestionFourChange} required>
          <option value=''>select option:</option>
          {questionFourData.choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
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

export default QuestionFour;
