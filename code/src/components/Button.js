import React from 'react';

const Button = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    console.log(counter)
    setCounter(counter + 1);
  }
  return (
    <div className="btn-container">
      <button type="button" onClick={handleIncreaseCounterClick}>click here</button>
    </div>
  );
}

export default Button;