/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionThree = ({
  handleStepIncrease,
  adjective,
  handleAdjectiveChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="3" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>What adjective would you use to describe an antique statue?</h1>
        <form className="select-style">
          <select
            className="select-form"
            onChange={handleAdjectiveChange}
            value={adjective}>
            <option value="DEFAULT">Choose adjective:</option>
            <option value="shiny">shiny</option>
            <option value="crooked">crooked</option>
            <option value="brilliant">brilliant</option>
            <option value="smooth">smooth</option>
          </select>
          {/* Alternative selection */}
          <form className="form-style">
            <label>Adjective:</label>
            <input
              type="text"
              value={adjective}
              onChange={handleAdjectiveChange}
            />
          </form>
        </form>
        {/* Continue button */}
        <button
          className="continue-btn"
          type="button"
          onClick={handleStepIncrease}>
          Next
        </button>
      </section>
    </>
  );
};

export default QuestionThree;

// {/* Adjective input */}
// <section className="question-container">
//   <div className="form-container">
//     <h1 className="question">
//       What adjective would you use to describe an antique statue?
//     </h1>
//     <form className="form-style">
//       <label>Adjective:</label>
//       <input
//         type="text"
//         value={adjective}
//         onChange={handleAdjectiveChange}
//       />
//     </form>
//   </div>{' '}
