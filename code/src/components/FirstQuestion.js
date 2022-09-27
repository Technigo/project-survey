/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const FirstQuestion = ({ firstQuestion, onFirstQuestionChange, nextQuestion }) => {
  return (
    <section className="first-section">
      <div className="content-wrap">
        <h1>Meat Consumption</h1>
        <p>How many times do you consume meat in a month?</p>
        <form className="form-dropdown">
          <labe htmlFor="meat">
            <select
              lang="en"
              value={firstQuestion}
              id="meat"
              onChange={onFirstQuestionChange}
              name="meat"
              className="select-meat">
              <option disabled value="">Choose a response</option>
              <option value="daily">Daily</option>
              <option value="weekly">Two or three times a week</option>
              <option value="monthly">Two or three times a month</option>
              <option value="never">Never</option>
            </select>
          </labe>
          <button type="button" onClick={nextQuestion} className="button" disabled={firstQuestion === ''}>
            Next Question!
          </button>
        </form>
      </div>
    </section>
  )
}

export default FirstQuestion;