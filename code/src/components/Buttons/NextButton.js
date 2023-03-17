import React from 'react';
import NextArrow from './assets/nextarrow.svg';

const NextButton = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button
        type="button"
        className="Btn"
        onClick={handleIncreaseCounterClick}
        aria-label="Previous">
        <img className="ButtonImage" src={NextArrow} alt="an arrow that points to the right to click you further to next question" />
      </button>
    </div>
  );
};

export default NextButton;