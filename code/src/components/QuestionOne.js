/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line no-unused-vars
const characterGroups = ['Bugs Bunny', 'Scooby-Doo', 'Tom and Jerry', 'Garfield', 'The Simpsons'];

// eslint-disable-next-line max-len
const QuestionOne = ({ questionOne, characterGroup, setCharacterGroup, onStepChange, onQuestionOneInputChange }) => {
  return (
    <div className="container">
      <h1 className="homeText"> Icebreaker meeting environment survey</h1>
      <form className="form-container">
        <p className="question">If you could work with any cartoon character, who would you choose?</p>
        {characterGroups.map((group) => (
          <label className="radioAnswers" key={group}>
            <input
              className="radioAnswers"
              type="radio"
              value={group}
              onChange={(event) => setCharacterGroup(event.target.value)}
              checked={characterGroup === group} />
            {group}
          </label>
        ))}
      </form>

      <p className="text">Other?</p>
      <input className="inputBox" type="text" value={questionOne} onChange={onQuestionOneInputChange} />
      <button className="lastButton" type="button" onClick={onStepChange}>next!</button>
    </div>
  );
}

export default QuestionOne;
