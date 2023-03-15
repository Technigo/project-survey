import React from 'react';
import SubmitIcon from './assets/submit.svg'

const RestartButton = ({ counter, setCounter }) => {
  const Submit = () => {
    setCounter(counter + 1);
  }
  return (
    <button
      type="button"
      className="Btn"
      onClick={Submit}>
      <img className="BtnImg" src={SubmitIcon} alt="a submit icon" />
    </button>
  )
}

export default RestartButton;