/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const FirstQuestion = ({ firstQuestion, onFirstQuestionChange, nextQuestion }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Gender</h1>
        <p>What is your gender?</p>
        <form className="form-dropdown">
          <label htmlFor="gender">
            <select
              lang="en"
              value={firstQuestion}
              id="gender"
              onChange={onFirstQuestionChange}
              name="gender"
              className="select-gender">
              <option disabled value="">Choose a response</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="secret">Secret</option>
            </select>
          </label>
          <button type="button" onClick={nextQuestion} className="button button-next" disabled={firstQuestion === ''}>
            Next question!
          </button>
        </form>
      </div>
    </section>
  )
}

export default FirstQuestion;