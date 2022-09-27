/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const WelcomeToTheSurvey = ({ onWelcomeChange, userName, nextQuestion }) => {
  return (
    <section className="welcome-section">
      <div className="content-wrap">
        <h1>Hey! This is Survey Time.</h1>
        <p> This survey is about the change of custom or decisions to protect the environment.
          Come participate with us! Let's start with typing your name.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name" placeholder="Your name">
            <input
              type="text"
              onChange={onWelcomeChange}
              value={userName}
              id="name"
              name="name" />
          </label>
        </form>
        <button type="button" onClick={nextQuestion} className="button" disabled={userName === ''}>
       Let's go!
        </button>
      </div>
    </section>
  )
}

export default WelcomeToTheSurvey;