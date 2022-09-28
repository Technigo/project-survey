/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Question1 } from 'components/Sleep';
import { Question2 } from 'components/Food';

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [userName, setUserNameInput] = useState('')

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
    setUserNameInput((event.target.value))
  }
  return (
    <div>
      My counter: {counter}
      <button type="button" onClick={() => handleCounterButtonClick(true)}>Increase</button>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>Decrease</button>
      <input type="text" value={userInput} onChange={handleUserInputChange} />
      <p>{userInput}</p>
      <p>
        <button type="button" onClick={handleClearButtonClick}>clear</button>
      </p>
      {/* conditional rendering. This only shows if the question is 0 */}
      {counter === 0 && (
        <div>
          <p>Hello please type in your name</p>
          <input type="text" value={userName} onChange={handleUserNameInputChange} />
          <p>Hi, my name is {userName}</p>
        </div>
      )}
    </div>
  );
}
