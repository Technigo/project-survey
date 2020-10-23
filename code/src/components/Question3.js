import React from 'react'

import "./question3.css"

const answersArray = ["YES", "NO"];

const Question3 = ({ questionText, questionAnswer, onAnswerChange }) => {

  return (
    <section className="section-container">
      <p>{questionText}</p>
      <div className="radio-btn-container">
        {answersArray.map(item => {
          return (
            <label key={item}>
              <input
                type="radio"
                value={item}
                onChange={event => onAnswerChange(event.target.value)}
                checked={questionAnswer === item}
              ></input>
              {item}
            </label>
          )
        })}
        {/* <fieldset className="answer-container">
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
        </fieldset> */}
      </div>
    </section>
  )
}

export default Question3;