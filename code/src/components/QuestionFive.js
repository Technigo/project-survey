/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionFive = ({
  handleSubmit,
  exclamation,
  handleExclamationChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="5" max="8" />
      </div>
      <section className="question-container">
        {/* Exclamation input */}
        <div className="form-container">
          <h1 className="question">
            What do you shout when something goes really wrong?
          </h1>
          <form className="form-style" onSubmit={handleSubmit}>
            <label>Shout:</label>
            <input
              type="text"
              value={exclamation}
              onChange={handleExclamationChange}
            />
            <input type="submit" className="continue-btn" value="Next" />
          </form>
        </div>
      </section>
    </>
  );
};

export default QuestionFive;
