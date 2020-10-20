import React from 'react'

// simple string answer
export const Question1 = (props) => {
  return (
    <form className="section-container">
      <label for="q1">{props.question}</label>
      <input type="text" id="q1" name="answerOne"></input>
    </form>)
}

export default Question1;