import React, { useState } from 'react';
import UserName from 'components/NameQ';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 10) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleClearButtonClick = () => {
    setUserInput('')
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value)
  }

  // condition ? what happen if true : what happens if false

  return (
    <div className="test">
    My counter {counter}
      <button type="button" onClick={() => handleCounterButtonClick(true)}>Increase</button>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>Decrease</button>
      {counter === 2 && (
        <UserName name={UserName} setName={setUserName} />)}
      <input type="text" value={userInput} onChange={handleUserInputChange} />
      <p>{userInput}</p>
      <p>
        <button type="button" onClick={handleClearButtonClick}>Clear input</button>
      </p>
      {counter === 0 && (
        // makes below div to only show when counter is 0
        <div>
          <p>Hello, please type in your name test</p>
          <input type="text" value={userName} onChange={handleUserNameInputChange} />
        </div>
      )}
      {counter === 10 && (
        // SUMMARY
        <div>
          <p>Summary</p>
          <p>Name: {userName}</p>
          <p>Input: {userInput}</p>
          <p>Current counter: {counter}</p>
        </div>
      )}
    </div>
  );
};
