/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const WelcomeToTheSurvey = ({ onWelcomeChange, nameWelcome, nextQuestion }) => {
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Hello! Answer this electricity survey!</h1>
        <p> Contribute to science by answering this 2 minutes survey!</p>
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
       Start!
        </button>
      </div>
    </section>
  )
}

export default WelcomeToTheSurvey;