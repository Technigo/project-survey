import React from 'react'

const FirstPage = ({ onNextQuestionChange }) => {
  return (
    <section className="first-page">
      <h1 className="welcome-text">
        Welcome to the survey
      </h1>

      <button type="button" className="forward" onClick={onNextQuestionChange}>
        START
      </button>
    </section>
  )
}
export default FirstPage;