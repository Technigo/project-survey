/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const WelcomeToTheSurvey = ({ onNameChange, userName, nextQuestion }) => {
  return (
    <section className="welcome-section">
      <div className="content-wrap">
        <h1>Hey! This is Survey Time.</h1>
        <p> This survey is about the change of custom or decisions to protect the environment.
          Come participate with us! Let's start with typing your name.
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name" placeholder="Your name">
          <input
            type="text"
            onChange={onNameChange}
            value={userName}
            id="name"
            name="name" />
        </label>
      </form>
      <button type="button" onClick={nextQuestion} className="button" disabled={userName === ''}>
       Let's go!
      </button>
    </section>
  )
}

export default WelcomeToTheSurvey;