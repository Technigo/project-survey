/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const FirstQuestion = ({ firstQuestion, onFirstQuestionChange, nextQuestion }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Meat Consumption</h1>
        <p>How many times do you consume meat in a month?</p>
        <form className="form-dropdown">
          <label htmlFor="meat">
            <select
              lang="en"
              value={firstQuestion}
              id="meat"
              onChange={onFirstQuestionChange}
              name="meat"
              className="select-meat">
              <option disabled value="">Choose a response</option>
              <option value="daily">Daily</option>
              <option value="two or three times a week">Two or three times a week</option>
              <option value="two or three times a month">Two or three times a month</option>
              <option value="never">Never</option>
            </select>
          </label>
          <button type="button" onClick={nextQuestion} className="button button-next" disabled={firstQuestion === ''}>
            Next Question!
          </button>
        </form>
      </div>
    </section>
  )
}

export default FirstQuestion;