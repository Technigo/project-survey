import React from 'react';

const QuestionThree = ({
  questionThreeData,
  // questionThreeAnswer,
  onQuestionThreeChange,
  // eslint-disable-next-line comma-dangle
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{questionThreeData.name}</h2>
        <h3>{questionThreeData.title}</h3>
        <select // value={questionThreeData.choices}
          onChange={onQuestionThreeChange}
          required
        >
          <option value=''>select option:</option>
          {questionThreeData.choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
        <br />
        {/* <AudioPlayer /> */}
        {/* <audio src='../../public/assets/questionThree.mp3' controls /> */}
        <audio controlsList='nodownload' controls>
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

export default QuestionThree;
