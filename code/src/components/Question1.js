import React from 'react';

//destructured props
const Question1 = ({ questionText, questionAnswer, onTextChange }) => {
  //state hook

  return (
    <div className="section-container">
      <label htmlFor="textField">{questionText}</label>
      <input
        type="text"
        id="textField"
        name="answerOne"
        autoComplete="off"
        //the bottom 2 parts & the type are controlled components
        //arrow functions are less efficient, better to use function name only
        onChange={(event) => onTextChange(event.target.value)}
        value={questionAnswer}>
      </input>
    </div>);
}

export default Question1;