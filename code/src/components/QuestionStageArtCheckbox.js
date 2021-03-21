import React from 'react';

import NextQuestionButton from './NextQuestionButton'
import Popup from './Popup'

const QuestionStageArtCheckbox = ({
	stageArtCategory,
  setStageArtCategory,
  page,
  setPage,
  onNextQuestion
}) => {
//const stageArtCategoryToString = stageArtCategory.toString()
  const onStageArtChange = (stageArtValue) => {
    if (stageArtCategory.includes(stageArtValue)) {
      setStageArtCategory(stageArtCategory.filter((item) => item !== stageArtValue))
    } else {
      setStageArtCategory([...stageArtCategory, stageArtValue])
    } 
  }
    
  const stageartGroup = [
    "I'm for experimental shit, I need to see something I can not immediately understand", 
    "I want to dance with my kid", 
    "Opera", 
    "Theatre", 
    "Musical", 
    "Concert",
    "I just miss the feeling of collectivity, and long to be able to see something with another person's eye - just once, please!", 
    "I want to drink beer with my friends after a show"
  ]

  return (
    <article className="form-question-3">
      {/* Q */}
      <p className="form-question" tabIndex="0">
        What kind of stage art would you like too experience post Covid-19? Pick 2 as they are made to overlap a little! <span role="img" aria-label="smiling emoji with one eye blinking">😊</span>
      </p>

      {/* A */}
      <div className="question-content-container-3">
        {stageartGroup.map((stagearts) => (
          <span className="form-checkbox-question-container" key={stagearts}>
            <label className="checkbox-label" htmlFor={stagearts}>{stagearts}</label>
            <input
              id={stagearts}
              type="checkbox"
              className="form-checkbox"
              checked={stageArtCategory.includes(stagearts)}
              onChange={() => onStageArtChange(stagearts)}
            />
          </span>
        ))}
        {stageArtCategory.length > 2 && (
          <Popup
            message="Please select 2 options!"
            className="form-popup"
          />
        )}
          <div className="buttons-container-3">
            <NextQuestionButton
              page={page}
              setPage={setPage}
              currentState={stageArtCategory.length}
              defaultState={0}
              message="Please choose what kind of overlapping stage arts you would like to experience first!"
              onClick={onNextQuestion}
              button="Next question button"
              buttontext="Next question"
            />
          </div>
      </div>
    </article>
  )
}

export default QuestionStageArtCheckbox