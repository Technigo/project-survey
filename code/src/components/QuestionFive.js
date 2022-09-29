/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
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
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="5" max="8" />
      </div>
      <section className="question-container">
        {/* Exclamation input */}
        <div className="form-container">
          <h1 className="question">Write or select an exclamation</h1>
          <form className="form-style" onSubmit={handleSubmit}>
            <select
              className="select-form"
              onChange={handleExclamationChange}
              value={exclamation}>
              <option value="default">Options</option>
              <option value="Mamma Mia!">Mamma mia!</option>
              <option value="Why did this happen to me?">
                Why did this happen to me?
              </option>
            </select>{' '}
            <div className="input-text-container">
              {/* <label>Shout:</label> */}
              <input
                placeholder="Other"
                type="text"
                onChange={handleExclamationChange}
              />
            </div>
            <input type="submit" className="continue-btn" value="Next" />
          </form>
        </div>
      </section>
    </>
  );
};

export default QuestionFive;
