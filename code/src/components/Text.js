import React from 'react';

import "./form.css";

//destructured props
const Text = ({ questionText, textAnswer, onTextChange }) => {

  return (
    <div className="section-container">
      <label tabIndex="0" htmlFor="textField"><h2>{questionText}</h2></label>
      <input
        tabIndex="0"
        type="text"
        id="textField"
        name="answerOne"
        autoComplete="off"
        required
        //the bottom 2 parts & the type are controlled components
        //arrow functions are less efficient, better to use function name only
        onChange={(event) => onTextChange(event.target.value)}
        value={textAnswer}>
      </input>
    </div>);
};

export default Text;