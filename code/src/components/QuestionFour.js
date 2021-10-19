import React from 'react';

const QuestionFour = ({
  questionFourData,
  onQuestionFourChange,
  // eslint-disable-next-line comma-dangle
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{questionFourData.name}</h2>
        <h3>{questionFourData.title}</h3>
        <select onChange={onQuestionFourChange} required>
          <option value=''>select option:</option>
          {questionFourData.choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
        <br /> <br />
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
