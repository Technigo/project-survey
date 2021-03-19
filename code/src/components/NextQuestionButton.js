import React, { useState } from 'react'

import Popup from './Popup'

const NextQuestionButton = ({
  currentState,
  defaultState,
  page,
  setPage,
  message,
  buttontext,
  button,
  handleSubmit
}) => {
  const [popup, setPopup] = useState(false)

  const onNextQuestion = () => {
  if (currentState !== defaultState) {
    setPage(page +1)
  } else {
    setPopup(true)
  }
}

  return (  
    <>
      {popup && <Popup message={message} className="form-popup" />}
      
      <button
        type={button}
        aria-label="button to the next question"
        className="next-button"
        onClick={onNextQuestion}
        onSubmit={handleSubmit}
        message={message}
      >
      {buttontext}
      </button>
    </>
  )
}
export default NextQuestionButton

