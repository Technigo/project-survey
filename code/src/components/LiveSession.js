import React, { useState } from 'react';

const LiveSession = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease) {
      setCounter(counter + 1)
    } else { setCounter(counter - 1) }
  }

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  }
  const clearButtonClick = () => {
    setUserInput('');
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  }

  return (
    <div>
      <p>My counter: {counter}</p>
      <button type="button" onClick={() => handleCounterButtonClick(true)}>Increase
      </button>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>Decrease
      </button>

      <input type="text" value={userInput} onChange={handleUserInputChange} />
      <p>{userInput}</p>
      <p><button type="button" onClick={clearButtonClick}>Clear</button></p>
      {/* Conditional rendering. Only works with one condition */}
      {counter === 0 && (
        <div>
          <p>Hello! Please type in your name</p>
          <input type="text" value={userName} onChange={handleUserNameInputChange} />
        </div>)}
      {/* this can be used to mount a component (show a new question for instance */}
    </div>
  );
}
export default LiveSession