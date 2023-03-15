import React from 'react';
import ArrowLeft from './assets/arrowleft.svg'

const RestartButton = ({ counter, setCounter }) => {
  const RestartQuestions = () => {
    setCounter(counter - 1);
  }
  return (
    <button
      type="button"
      className="Btn"
      onClick={RestartQuestions}>
      <img className="BtnImg" src={ArrowLeft} alt="a reload icon" />
    </button>
  )
}

export default RestartButton;