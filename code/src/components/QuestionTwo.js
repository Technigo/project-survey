/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionTwo = ({
  handleStepIncrease,
  adjective,
  handleAdjectiveChange,
  animal,
  handleAnimalChange,
  exclamation,
  handleExclamationChange,
  adjectiveSecond,
  handleAdjectiveSecondChange,
  creature,
  handleCreatureChange,
  food,
  handleFoodChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="3" />
      </div>
      {/* Adjective input */}
      <section className="question-container">
        <div className="form-container">
          <h1 className="question">
            What adjective would you use to describe your beloved?
          </h1>
          <form className="form-style">
            <label>Adjective:</label>
            <input
              type="text"
              value={adjective}
              onChange={handleAdjectiveChange}
            />
          </form>
        </div>{' '}
        {/* Animal input */}
        <div className="form-container">
          <h1 className="question">What is the strangest animal you know?</h1>
          <form className="form-style">
            <label>Strange animal:</label>
            <input type="text" value={animal} onChange={handleAnimalChange} />
          </form>
        </div>
        {/* Exclamation input */}
        <div className="form-container">
          <h1 className="question">
            What do you shout when something goes really wrong?
          </h1>
          <form className="form-style">
            <label>Shout:</label>
            <input
              type="text"
              value={exclamation}
              onChange={handleExclamationChange}
            />
          </form>
        </div>
        {/* Adjective 2 input */}
        <div className="form-container">
          <h1 className="question">What is a synonym to puzzling?</h1>
          <form className="form-style">
            <label>Adjective:</label>
            <input
              type="text"
              value={adjectiveSecond}
              onChange={handleAdjectiveSecondChange}
            />
          </form>
        </div>
        {/* Mytical creature */}
        <div className="form-container">
          <h1 className="question">
            What mythical creature would you like to believe are real?
          </h1>
          <form className="form-style">
            <label>Mythical creature:</label>
            <input
              type="text"
              value={creature}
              onChange={handleCreatureChange}
            />
          </form>
        </div>
        {/* Favorite food */}
        <div className="form-container">
          <h1 className="question">Name a food that doesnt have onion?</h1>
          <form className="form-style">
            <label>Food:</label>
            <input type="text" value={food} onChange={handleFoodChange} />
          </form>
        </div>
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

export default QuestionTwo;
