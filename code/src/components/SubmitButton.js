import React from 'react';
import SubmitIcon from './assets/submit.svg'

const SubmitButton = ({ counter, setCounter }) => {
  const Submit = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button
        type="button"
        className="Btn"
        onClick={Submit}>
        <img className="BtnImg" src={SubmitIcon} alt="a submit icon" />
      </button>
    </div>
  )
}

export default SubmitButton;