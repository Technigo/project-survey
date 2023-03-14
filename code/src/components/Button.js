import React from 'react';
import ArrowIcon from './assets/arrow.svg'

const Button = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }
  return <button type="button" className="nextBtn" onClick={handleIncreaseCounterClick}><img className="nextBtnImg" src={ArrowIcon} alt="forward pointing arrow" /></button>
}
export default Button;