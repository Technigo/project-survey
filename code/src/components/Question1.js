import React from 'react'

// CTRL:ed component: simple string answer
const Question1 = ({ questionText, questionAnswer, onTextChange }) => {
  //state hook

  return (
    <form className="section-container">
      <label htmlFor="textField">{questionText}</label>
      <input
        type="text"
        id="textField"
        name="answerOne"
        autocomplete="off"
        //the bottom 2 parts & the type are controlled components
        //arrow functions are less efficient, better to use function name only
        onChange={(event) => onTextChange(event.target.value)}
        value={questionAnswer}>
      </input>
    </form>)
}

export default Question1;