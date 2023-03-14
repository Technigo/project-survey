import React from 'react';

const Button = ({ counter, setCounter }) => {
  const handleIncreaseCounterClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="btn-container">
      <button type="button" onClick={handleIncreaseCounterClick}>Submit</button>
    </div>
  );
}

export default Button;