import React from 'react';

const QuestionThree = ({
  questionThreeData,
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
      <h2 aria-label='Question 3. Disney music.'>{questionThreeData.name}</h2>
      <h3>{questionThreeData.title}</h3>
      <audio controlsList='nodownload' controls aria-label='audio player'>
        <source src='./assets/questionThree.mp3' type='audio/mp3' />
        <track
          src='questionThree.mp3'
          kind='captions'
          srcLang='en'
          label='questionThree_track'
        />
        Your browser does not support the audio tag.
      </audio>
      <br />
      <select onChange={onAnswerChange} required>
        <option value=''>select option:</option>
        {questionThreeData.choices.map((choice) => (
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
  );
};

export default QuestionThree;
