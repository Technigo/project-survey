import React, { useState } from 'react';

import Header from 'components/Header';
import { RecieverNameInput } from 'components/Recievernameinput';
import { ConsiderationInput } from 'components/Considerationinput';
import { TextAreaInput } from 'components/Textareainput';
import { ActionInput } from 'components/Actioninput';
import { UserNameInput } from 'components/Usernameinput';
import { Summary } from 'components/Summary';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [consideration, setConsideration] = useState('');
  const [textArea, setTextArea] = useState('');
  const [action, setAction] = useState('');
  const [userName, setUserName] = useState('');

  const handleStepIncrease = (shouldIncrease) => {
    if (shouldIncrease && counter < 1) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <Header />

        {/* Where we gather the message */}
        {counter === 0 && (
          <div>
            <RecieverNameInput recieverName={recieverName} setRecieverName={setRecieverName} />
            <ConsiderationInput consideration={consideration} setConsideration={setConsideration} />
            <TextAreaInput textArea={textArea} setTextArea={setTextArea} />
            <ActionInput action={action} setAction={setAction} />
            <UserNameInput userName={userName} setUserName={setUserName} />
            <button type="submit" onClick={() => handleStepIncrease(true)}> Summarize</button>
          </div>
        )}

        {/* Where we summarize the message */}
        {counter === 1 && (
          <>
            <Summary
              recieverName={recieverName}
              consideration={consideration}
              textArea={textArea}
              action={action}
              userName={userName} />
            <input type="text" placeholder="Recievers Email" />
            <input type="text" placeholder="Your Email" />
            <button type="button"> Send Email </button>
            <button type="button" onClick={() => handleStepIncrease(false)}> Edit </button>
          </>
        )}
        {/* My page counter {counter} */}
      </div>
    </div>
  );
}

