import React from 'react'

import NextQuestionButton from './NextQuestionButton'

const QuestionStageArtRadio = () => ({
  stageArtCategory,
  setStageArtCategory,
  page,
  setPage,
  onStageArtChange,
  onNextQuestion,
  message
}) => {

  const stageart = ["I'm for experimental shit, I need to see something I can not immediately understand", "I want to dance with my kid", "Opera", "Theatre", "Musical", "I just miss the feeling of collectivity, and long to be able to see something with another person's eye - just once, please!", "Concert"]

  return (
    <article className="form-question-3">
      {/* Q */}
      <p htmlFor="stage" className="form-question" tabIndex="0">
        What kind of stage art would you like too experience post Covid-19?
      </p>

      {/* A */}
      <div className="question-content-container">
        {stageart.map((stagetype) => (
          <span key={stagetype} className="form-radiobuttons">
            <input
              name={stagetype}
              id={stagetype}
          //  value={category} ---> not needed for radiobuttons as they are static
              type="radio"
              onChange={setStageArtCategory}
          //  checked={stageArtCategory === category}
              className="form-radiobuttons"
            />
            <label htmlFor={stagetype} aria-label={stagetype} tabindex="0">
              <span className="form-radiobutton-input">{stagetype}</span>
            </label>
          </span>
        ))}
      </div>
      <div className="buttons-container">
        <NextQuestionButton
          page={page}
          setPage={setPage}
          currentState={stageArtCategory}
          defaultState=""
          message="Please choose what kind of stage art you would like to experience"
          onClick={onNextQuestion}
        />
      </div>
    </article>
  )
}

export default QuestionStageArtRadio