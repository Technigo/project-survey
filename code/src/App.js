/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 10) {
      setCounter(counter + 1);
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClearButtonClick = () => {
    setUserInput('');
  };

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      My counter {counter}
      <button type="button" onClick={() => handleCounterButtonClick(true)}>
        Increase 10 max
      </button>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>
        Decrease 0 min
      </button>
      <input type="text" value={userInput} onChange={handleUserInputChange} />
      <p> {userInput}</p>
      <p>
        <button type="button" onClick={handleClearButtonClick}>
          clear input
        </button>
      </p>
      {counter === 0 && (
        <div>
          <p>Hello, please type in your name</p>
          <input
            type="text"
            value={userName}
            onChange={handleUserNameInputChange} />
        </div>
      )}
    </div>
  );
};
