import React from 'react';
import ArrowRight from './assets/arrowright.svg'

const NextButton = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button
        type="button"
        className="Btn"
        onClick={handleIncreaseCounterClick}>
        <img className="BtnImg" src={ArrowRight} alt="forward pointing arrow" />
      </button>
    </div>
  )
}
export default NextButton;