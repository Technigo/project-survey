import React from 'react';

const Button = ({ counter, setCounter, name }) => {
  const handleCounterIncrement = () => {
    console.log(counter)
    return setCounter(counter + 1)
  }
  return (
    <button className="button-start" type="button" onClick={handleCounterIncrement}>
      {name}
    </button>
  );
}
export default Button;