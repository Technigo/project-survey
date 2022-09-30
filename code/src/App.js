import React, { useState } from 'react';

import Header from 'components/Header';
import { RecieverNameInput } from 'components/Recievernameinput';
import { ConsiderationInput } from 'components/Considerationinput';
import { TextAreaInput } from 'components/Textareainput';
import { ActionInput } from 'components/Actioninput';
import { UserNameInput } from 'components/Usernameinput';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [consideration, setConsideration] = useState('');
  const [textArea, setTextArea] = useState('');
  const [action, setAction] = useState('');
  const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleStepIncrease = (shouldIncrease) => {
    if (shouldIncrease && counter < 1) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleClearButtonClick = () => {
    setUserInput('');
  }

  return (
    <div>
      <Header />

      {/* Where we gather the message */}
      {counter === 0 && (
        <div>
          <RecieverNameInput recieverName={recieverName} setRecieverName={setRecieverName} />
          <ConsiderationInput consideration={consideration} setConsideration={setConsideration} />
          <TextAreaInput textArea={textArea} setTextArea={setTextArea} />
          <ActionInput action={action} setAction={setAction} />
          <UserNameInput userName={userName} setUserName={setUserName} />
          <button type="button" onClick={() => handleStepIncrease(true)}> Summarize</button>
        </div>
      )}

      {/* Where we summarize the message */}
      {counter === 0 && (
        <div>
          {/* Use this in summarize for message input */}
          <p>Dear {recieverName} , </p>
          <p>
            You might want to consider {consideration}.
            Lately I`ve noticed that you {textArea}.
          </p>
          <p>And I would hate if someone had to {action}</p>
          <p>Sincerely, {userName} </p>
          <p> {userInput} </p>
          {/* <button type="button" onClick={() => handleStepIncrease(false)}> Edit</button> */}
          <button type="button" onClick={handleClearButtonClick}>Clear input</button>
        </div>
      )}
      My counter {counter}
    </div>
  );
}

