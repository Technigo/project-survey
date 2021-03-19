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
    "I just miss the feeling of collectivity, and long to be able to see something with another person's eye - just once, please!", 
    "Concert"
  ]

  return (
    <article className="form-question-3">
      {/* Q */}
      <p className="form-question" tabIndex="0">
        What kind of stage art would you like too experience post Covid-19? Please pick 2 as they are made to overlap a little! <span role="img" aria-label="smiling emoji with one eye blinking">😊</span>
      </p>

      {/* A */}
      <div className="question-content-container">
        {stageartGroup.map((stagearts) => (
          <span className="form-checkbox-question-container" key={stagearts}>
            <label htmlFor={stagearts}>{stagearts}</label>
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
            classNames="form-popup-larger"
          />
        )}
      </div>
      <div className="buttons-container">
      <NextQuestionButton
        page={page}
        setPage={setPage}
        currentState={stageArtCategory.length}
        defaultState=''
        message="Please choose what kind of overlapping stage arts you would like to experience first!"
        onClick={onNextQuestion}
        button="Next question button"
        buttontext="Next question"
        />
      </div>
    </article>
  )
}

export default QuestionStageArtCheckbox