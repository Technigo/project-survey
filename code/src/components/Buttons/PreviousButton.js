import React from 'react';
import PreviousArrow from './assets/previousarrow.svg';

const PreviousButton = ({ counter, setCounter }) => {
  const PreviousClick = () => {
    setCounter(counter - 1);
  }

  return (
    <button
      type="button"
      className="Btn"
      onClick={PreviousClick}
      aria-label="Previous">
      <img className="ButtonImage" src={PreviousArrow} alt="an arrow that points to the left to click you back to previous question" />
    </button>
  );
};

export default PreviousButton;