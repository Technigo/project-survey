import React from 'react'

const NextQuestionButton = ({
  currentState,
  defaultState,
  page,
  setPage,
  message,
  buttontext,
  button
}) => {
  const onNextQuestion = () => setPage(page +1)

  //check if message is rendered anywhere, like in react dev tools - it should probably not be here***
  return (
    <>
      <button
        type={button}
        aria-label="button to the next question"
        className="next-button"
        onClick={onNextQuestion}
        message={message}
      >
      {buttontext}
      </button>
    </>
  )
}
export default NextQuestionButton

