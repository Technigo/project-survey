import React from 'react';

const Button = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    console.log(counter)
    setCounter(counter + 1);
  }
  return (
    <div className="btn-container">
      <button type="button" onClick={handleIncreaseCounterClick}>KLICK</button>
    </div>
  );
}

export default Button;