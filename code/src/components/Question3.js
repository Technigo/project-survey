import React from 'react'

import "./question3.css"

const answersArray = ["YES", "NO"];

const Question3 = ({ questionText3, questionAnswer3, onAnswerChange }) => {

  return (
    <section className="section-container">
      <p>{questionText3}</p>
      <div className="radio-btn-container">
        {answersArray.map(item => {
          return (
            <label key={item}>
              <input
                type="radio"
                name="button"
                required
                value={item}
                onChange={event => onAnswerChange(event.target.value)}
                checked={questionAnswer3 === item}
              ></input>
              {item}
            </label>
          );
        })}
      </div>
    </section>
  )
}

export default Question3;