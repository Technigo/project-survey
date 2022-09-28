import React, { useState } from 'react';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [consideration, setConsideration] = useState('');
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

  const handleConsiderationChange = (event) => {
    setConsideration(event.target.value);
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
            <p>You might want to consider</p>
            <form>
              <select>
                onChange={handleConsiderationChange}
                value={consideration}
                <option value="">Select option</option>
                <option value="Reassessing your priorities">Reassessing your priorities</option>
                <option value="Trying meditation">Trying meditation</option>
                <option value="Finishing what you`ve started">Finishing what you`ve started</option>
                <option value="Lightening up">Lightening up</option>
                <option value="Positive thinking">Positive thinking</option>
                <option value="Smiling once in a while">Smiling once in a while</option>
                <option value="Asking for help next time">Asking for help next time</option>
                <option value="Listening to others">Listening to others</option>
                <option value="Getting a life">Getting a life</option>
              </select>
            </form>
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

