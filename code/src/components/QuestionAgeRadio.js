import React from 'react'

//Q: Line 34 aria-label={category} - is this how I would write it? 
import NextQuestionButton from './NextQuestionButton'

const QuestionAgeRadio = () => ({
  ageCategory,
  setAgeCategory,
  page,
  setPage,
}) => {
  const onAgeChange = (event) => {
    setAgeCategory(event.target.value)
  }

  const age = ['15-25', '26-35', '36-45', '46-65', '65+']

  return (
    <article className="form-question-2">
      {/* Q */}
      <p htmlFor="age" className="form-question" tabIndex="0">
        How old are you?
      </p>

      {/* A */}
      <div className="question-content-container">
        {age.map((category) => (
          <span key={category} className="form-radiobuttons">
            <input
              id={category}
              type="radio"
              value={category}
              onChange={onAgeChange}
              checked={ageCategory === category}
              className="form-radiobuttons"
            />
            <label htmlFor={category} key={category} aria-label={category}>
              <span className="form-radiobutton-input">{category}</span>
            </label>
          </span>
        ))}
      </div>
      <div className="buttons-container">
        <NextQuestionButton
          whatQuestionNext="thirdQuestion"
          page={page}
          setPage={setPage}
          currentState={ageCategory}
          defaultState=""
          message="Please select your age first!"
        />
      </div>
    </article>
  )
}

export default QuestionAgeRadio