/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line no-unused-vars
const bossMemes = ['1.Dying', '2.Flexible', '3.Late Friday'];

// eslint-disable-next-line max-len
const QuestionThree = ({ questionThree, bossMeme, setBossMeme, onStepChange, onQuestionThreeInputChange }) => {
  return (
    <div className="container">
      <h1 className="homeText"> Icebreaker meeting environment survey</h1>
      <form className="form-container">
        <p tabIndex="0" className="question">Which one is an exampel of your Boss in our company?</p>
        {bossMemes.map((group) => (
          <label tabIndex="0" className="radioAnswers" key={group}>
            <input
              className="radioAnswers"
              type="radio"
              value={group}
              onChange={(event) => setBossMeme(event.target.value)}
              checked={bossMeme === group} />
            {group}
            <img src="./assets/boss2.webp" alt="option1" />
          </label>
        ))}
      </form>

      <p tabIndex="0" className="text">Sorry! We do not have another Boss working here rather than those three alternatives</p>
      <p tabIndex="0" className="text">Please feel free to write down for us who else you prefer to have! (We will try to hire one!)</p>
      <label>
        <input tabIndex="0" className="inputBox" type="text" value={questionThree} onChange={onQuestionThreeInputChange} />
      </label>
      <button className="lastButton" type="submit" onClick={onStepChange}>Submit</button>
    </div>
  );
}

export default QuestionThree;