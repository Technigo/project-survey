/* eslint-disable react/no-unescaped-entities */
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
          Progress{' '}
        </label>
        <progress className="progress-bar" id="survey" value="5" max="8" />
      </div>
      <section className="question-container">
        {/* Exclamation input */}
        <div className="form-container">
          <h1 className="question">Select or write an exclamation</h1>
          <form className="form-style" onSubmit={handleSubmit}>
            <select
              className="select-form"
              onChange={handleExclamationChange}
              value={exclamation}>
              <option value="default">Options</option>
              <option value="Stiffen the wombats!">Stiffen the wombats!</option>
              <option value="I'll be jitterbugged!">
                I'll be jitterbugged!
              </option>
              <option value="Holy pretzel!">Holy pretzel!</option>
              <option value="FISH HOOKS!">FISH HOOKS!</option>
              <option value="Merlins beard!">Merlins beard!</option>
            </select>{' '}
            <div className="input-text-container">
              {/* <label>Shout:</label> */}
              <input
                placeholder="Other"
                className="input-form"
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
