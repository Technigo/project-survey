import React from 'react';

//destructured props
const Question1 = ({ questionText1, questionAnswer1, onTextChange }) => {

  return (
    <div className="section-container">
      <label htmlFor="textField">{questionText1}
        <input
          type="text"
          id="textField"
          name="answerOne"
          autoComplete="off"
          required
          //the bottom 2 parts & the type are controlled components
          //arrow functions are less efficient, better to use function name only
          onChange={(event) => onTextChange(event.target.value)}
          value={questionAnswer1}>
        </input>
      </label>
    </div>);
};

export default Question1;