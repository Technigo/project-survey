import React from 'react'

const FirstPage = ({ onNextQuestionChange }) => {
  return (
    <section className="first-page">
      <h1 className="welcome-text">
        Welcome to
      </h1>
      <h2 className="welcome-text-under">
        the self assesment
      </h2>
      <p className="welcome-paragraph"> This prepares us for your visit,
        in order to deliver you the highest
        standard of care!
      </p>
      <button type="button" className="start-btn" onClick={onNextQuestionChange}>
        START
      </button>
    </section>
  )
}
export default FirstPage;