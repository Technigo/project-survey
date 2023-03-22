import React from 'react';
import ArrowLeft from './assets/arrowleft.svg'

const PreviousButton = ({ counter, setCounter }) => {
  const PreviousClick = () => {
    setCounter(counter - 1);
  }
  return (
    <button
      type="button"
      className="Btn"
      onClick={PreviousClick}>
      <img className="BtnImg" src={ArrowLeft} alt="a reload icon" />
    </button>
  )
}

export default PreviousButton;