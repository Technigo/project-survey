import React from 'react'

import NextQuestionButton from './NextQuestionButton'

const QuestionStageArtRadio = () => ({
  stageArtCategory,
  setStageArtCategory,
  page,
  setPage,
}) => {
  const onStageArtChange = (event) => {
    setStageArtCategory(event.target.value)
  }

  const stageart = ["I'm for experimental shit, I need to see something I can not immediately understand", "I want to dance with my kid", "Opera", "Theatre", "Musical", "I just miss the feeling of collectivity, and long to be able to see something with another person's eye - just once, please!", "Concert"]

  return (
    <article className="form-question-3">
      {/* Q */}
      <p htmlFor="stage" className="form-question" tabIndex="0">
        What kind of stage art would you like too experience post Covid-19?
      </p>

      {/* A */}
      <div className="question-content-container">
        {stageart.map((category) => (
          <span key={category} className="form-radiobuttons-stageart">
            <input
              id={category}
              type="radio"
              value={category}
              onChange={onStageArtChange}
              checked={stageArtCategory === category}
              className="form-radiobuttons-stageart"
            />
            <label htmlFor={category} key={category} aria-label={category}>
              <span className="form-radiobutton-input-stageart">{category}</span>
            </label>
          </span>
        ))}
      </div>
      <div className="buttons-container">
        <NextQuestionButton
          whatQuestionNext="fourthQuestion"
          page={page}
          setPage={setPage}
          currentState={stageArtCategory}
          defaultState=""
          message="Please choose what kind of stage art you would like to experience"
        />
      </div>
    </article>
  )
}

export default QuestionStageArtRadio