import React, { useState } from 'react'

// CTRL:ed component: simple string answer
const Question1 = (props) => {
  //state hook
  const [text, setText] = useState("");

  return (
    <form className="section-container">
      <label htmlFor="q1">{props.question}</label>
      <input
        type="text"
        id="q1"
        name="answerOne"
        //the bottom 2 parts & the type are controlled components
        onChange={(event) => setText(event.target.value)}
        value={text}>
      </input>
    </form>)
}

export default Question1;