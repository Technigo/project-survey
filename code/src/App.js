import React, { useState } from 'react';

import Header from 'components/Header';
import { RecieverNameInput } from 'components/Recievernameinput';
import { ConsiderationInput } from 'components/Considerationinput';
import { TextAreaInput } from 'components/Textareainput';
import { ActionInput } from 'components/Actioninput';
import { UserNameInput } from 'components/Usernameinput';
import { Summary } from 'components/summary';
// import { Button } from 'components/button';
// import { Email } from 'components/EmailInput';
// import { Checkbox } from 'components/Checkbox';

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
        {/* Gather the message */}
        {counter === 0 && (
          <div className="form-wrapper">
            <Header />
            <RecieverNameInput recieverName={recieverName} setRecieverName={setRecieverName} />
            <ConsiderationInput consideration={consideration} setConsideration={setConsideration} />
            <TextAreaInput textArea={textArea} setTextArea={setTextArea} />
            <ActionInput action={action} setAction={setAction} />
            <UserNameInput userName={userName} setUserName={setUserName} />
            <input className="button primary-button" type="submit" value="Summarize" onClick={() => handleStepIncrease(true)} />
          </div>
        )}

        {/* Summarize the message */}
        {counter === 1 && (
          <div className="form-wrapper">
            <Header />
            <p>Copy and send this to whom every it&apos;s for.</p>
            <Summary
              recieverName={recieverName}
              consideration={consideration}
              textArea={textArea}
              action={action}
              userName={userName} />
            {/* <div className="group-wrapper">
              <Email email="Recievers Email" />
              <Email email="Your Email" />
            </div>
            <div className="group-wrapper">
              <Checkbox label="By accepting these terms and conditions,
              you acknowledge and agree that your email address may be
              used as the sender of an email on the website. " />
              <Button button="Send Email" />
            </div> */}
            <button
              className="button secondary-button"
              type="button"
              onClick={() => handleStepIncrease(false)}>Edit
            </button>
          </div>
        )}
        <div className="image-container">
          <img className="image" src="../images/Fist.jpg" alt="A hand making a fist" />
        </div>
      </div>
    </div>
  );
}