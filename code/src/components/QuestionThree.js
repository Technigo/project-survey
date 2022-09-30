/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionThree = ({ handleSubmit, adjective, handleAdjectiveChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress{' '}
        </label>
        <progress className="progress-bar" id="survey" value="3" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>Write or select an adjective to describe an object</h1>
        <form className="select-style" onSubmit={handleSubmit}>
          <select
            className="select-form"
            onChange={handleAdjectiveChange}
            value={adjective}>
            <option value="DEFAULT">Choose adjective</option>
            <option value="deformed">deformed</option>
            <option value="proportioned">proportioned</option>
            <option value="dubious magical">dubious magical</option>
            <option value="large immovable">large immovable</option>
            <option value="noteworthy">noteworthy</option>
            <option value="unpleasantly functional">
              unpleasantly functional
            </option>
          </select>
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="alt-selection">
              {/* Other: */}
              <input
                placeholder="Other"
                className="input-form"
                id="alt-selection"
                type="text"
                onChange={handleAdjectiveChange}
              />
            </label>
          </div>
          <input type="submit" className="continue-btn" value="Next" />
        </form>
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
