import React from 'react'

import NextQuestionButton from './NextQuestionButton'

const QuestionAgeRadio = ({
  ageCategory, 
  setAgeCategory, 
  page,
  setPage,
  onNextQuestion
}) => {
  const onAgeChange = (e) => {
    setAgeCategory(e.target.value)
  }

  const age = ['15-25', '26-35', '36-45', '46-65', '65+']
  
  return (
    <article className="form-question">
      {/* Q */}
      <p htmlFor="age" className="form-question" tabIndex="0">
        How old are you?
      </p>

      {/* A */}
      <div className="question-content-container">
        {age.map((age) => (
          <span key={age} className="form-radiobuttons">
            <input
              name="age"
              id={age}
              value={age}
              type="radio"
              onChange={(e) => {onAgeChange(e)}}
              checked={ageCategory === age}
              className="form-radiobuttons"
            />
            <label htmlFor={age} aria-label={age} tabIndex="0">
              <span className="form-radiobutton-input">{age}</span> 
            </label>
          </span>
        ))}
      </div>
      <div className="buttons-container">
        <NextQuestionButton
          page={page}
          setPage={setPage}
          currentState={ageCategory}
          defaultState={undefined}
          message="Please select your age first!"
          onClick={onNextQuestion}
          button="Next question button"
          buttontext="Next question"
        />
      </div>
    </article>
  )
}

export default QuestionAgeRadio