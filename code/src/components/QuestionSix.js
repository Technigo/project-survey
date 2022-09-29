/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionSix = ({
  handleSubmit,
  adjectiveSecond,
  handleAdjectiveSecondChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="6" max="8" />
      </div>
      <section className="question-container">
        {/* Adjective 2 input */}
        <div className="form-container">
          <h1>Choose another adjective or write</h1>
          <form className="select-style" onSubmit={handleSubmit}>
            <select
              className="select-form"
              onChange={handleAdjectiveSecondChange}
              value={adjectiveSecond}>
              <option value="default">Choose:</option>
              <option value="puzzling">puzzling</option>
              <option value="paranoid ">paranoid</option>
              <option value="skeptical">skeptical</option>
              <option value="unsettled">unsettled</option>
              <option value="hieroglyphical">hieroglyphical</option>
              <option value="inexplicable">inexplicable</option>
              <option value="obvious">obvious</option>
              <option value="gloomy">gloomy</option>
            </select>{' '}
            {/* Alternative selection */}
            <div className="input-text-container">
              <label htmlFor="alt-selection">
                {/* Other: */}
                <input
                  placeholder="Other"
                  className="input-form"
                  id="alt-selection"
                  type="text"
                  onChange={handleAdjectiveSecondChange}
                />
              </label>
            </div>
            <input type="submit" className="continue-btn" value="Next" />
          </form>
        </div>
        {/* Continue button */}
      </section>
    </>
  );
};

export default QuestionSix;
