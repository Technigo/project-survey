import React from 'react'
import "./question3.css"


export const Question3 = (props) => {

  return (
    <section className="section-container">
      <p>{props.question}</p>
      <div className="radio-btn-container">
        <div className="answer-container">
          <input type="radio" id="yes" name="answer"></input>
          <label for="yes">YES</label>
        </div>
        <div className="answer-container">
          <input type="radio" id="no" name="answer"></input>
          <label for="no">NO</label>
        </div>
      </div>
    </section>
  )
}

export default Question3;