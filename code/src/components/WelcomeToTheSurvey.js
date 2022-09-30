/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const WelcomeToTheSurvey = ({ onWelcomeChange, nameWelcome, nextQuestion }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Hey! This is Survey Time.</h1>
        <p> This survey is about the change of custom or decisions to protect the environment.
          Come participate with us! Let's start with typing your name.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            <input
              type="text"
              onChange={onWelcomeChange}
              value={nameWelcome}
              id="name"
              name="name"
              placeholder="Your name" />
          </label>
        </form>
        <button type="button" onClick={nextQuestion} className="button" disabled={nameWelcome === ''}>
       Let's go!
        </button>
      </div>
    </section>
  )
}

export default WelcomeToTheSurvey;