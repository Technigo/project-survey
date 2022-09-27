import React, { useState } from 'react';
import UserName from 'components/UserName';

export const App = () => {
  const [counter, setCounter] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 7) {
      setCounter(counter + 1);
    } else if (!shouldIncrease && counter > 1) {
      setCounter(counter - 1);
    }
  };

  /* const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  }; */

  const handleClearButtonClick = () => {
    setUserInput('');
  };

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h1>Join our newsletter</h1>
      <p>Get early access to new products & exclusive promos! </p>
      <p>Do not miss your chance! Only for members of our newsletter!</p>

      <div className="questionsCounter">
      Question number {counter}
        <div className="questionsButtons">
          <button type="button" onClick={() => handleCounterButtonClick(false)}>
        Previous question
          </button>
          <button type="button" onClick={() => handleCounterButtonClick(true)}>
        Next question
          </button>
        </div>
      </div>

      {counter === 1 && (
        <UserName name={userName} setName={setUserName} />
      )}
      <p> {userInput} </p>
      {/* <input type="text" value={userInput} onChange={handleUserInputChange} />  */}

      <p>
        <button type="button" onClick={handleClearButtonClick}>
          clear input
        </button>
      </p>

      {counter === 2 && (
        <div>
          <p>What is your last name?</p>
          <input
            type="text"
            value={userName}
            onChange={handleUserNameInputChange} />
        </div>
      )}

      {counter === 7 && (
        <div>
          <p>Survey completed!</p>
          <p>Summary of you answers:</p>
          <p>Name: {userName} </p>
          <p>Input: {userInput}</p>
          <p>Questions answered: {counter}/7</p>
        </div>
      )}
    </div>

  );
};
