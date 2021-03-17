import React from 'react'

const NextQuestionButton = ({
  currentState,
  defaultState,
  page,
  setPage,
  message
}) => {
  const onNextQuestion = () => setPage(page +1)

  //check if message is rendered anywhere, like in react dev tools***
  return (
    <>
      <button
        type="button"
        aria-label="button to the next question"
        className="next-button"
        onClick={onNextQuestion}
        message={message}
      >
        Next question
      </button>
    </>
  )
}
export default NextQuestionButton