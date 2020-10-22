import React, { useState } from 'react'

import "./question3.css"


const Question3 = (props) => {

  const [answer, setAnswer] = useState("");

  return (
    <section className="section-container">
      <p>{props.question}</p>
      <div className="radio-btn-container">
        <fieldset className="answer-container">
          <input
            type="radio"
            id="yes"
            name="answer"
            value="YES"
            onChange={event => setAnswer(event.target.value)}
            checked={answer === "YES"}
          ></input>
          <label htmlFor="yes">YES</label>
        </fieldset>
        <fieldset className="answer-container">
          <input
            type="radio"
            id="no"
            name="answer"
            value="NO"
            onChange={event => setAnswer(event.target.value)}
            checked={answer === "NO"}
          ></input>
          <label htmlFor="no">NO</label>
        </fieldset>
      </div>
    </section>
  )
}

export default Question3;