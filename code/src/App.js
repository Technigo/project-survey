import React, { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 1) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleClearButtonClick = () => {
    setUserInput('');
  }

  const handleRecieverNameInputChange = (event) => {
    setRecieverName(event.target.value);
  }

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  }

  return (
    <div>
      <h1>Passive-Aggressive Email</h1>

      {/* Where we gather the message */}
      {counter === 0 && (
        <div>
          <p>
            Dear
            <input type="text" value={recieverName} onChange={handleRecieverNameInputChange} placeHolder="Type name" />
            ,
          </p>
          <p>
            <p>Lately I`ve noticed that you:</p>
            <textarea rows="5" cols="30" name="Message" type="text" value={userInput} onChange={handleUserInputChange} placeHolder="Write a message" />
          </p>
          <p>
            Sincerely,
            <input type="text" value={userName} onChange={handleUserNameInputChange} placeHolder="Your name" />
          </p>
          <button type="button" onClick={() => handleCounterButtonClick(true)}> Summarize</button>
        </div>
      )}

      {/* Where we summarize the message */}
      {counter === 1 && (
        <div>
          {/* Use this in summarize for message input */}
          <p> {userInput} </p>
          <button type="button" onClick={() => handleCounterButtonClick(false)}> Cancel</button>
          <p>
            <button type="button" onClick={handleClearButtonClick}>Clear input</button>
          </p>
          <p>Hello, please type in your name.</p>
        </div>
      )}
      My counter {counter}
    </div>
  );
}

