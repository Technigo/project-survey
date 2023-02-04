/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { ThankYouMessage } from 'components/ThankYouMessage';
import { DestinationQuestion } from './components/DestinationQuestion';
import { Pax } from './components/Pax';
import { Confirmation } from './components/Confirmation';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState('');
  const [pax, setPax] = useState('');
  const [paxChild, setPaxChild] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);}
    const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }
  return (
    <div className="parent">
      <div className="SurvayWrapper">
          {step === 1 && (
          <WelcomeMessage name={name} setName={setName} phone={phone} setPhone={setPhone} />
        )}
        {step === 2 && (
          <DestinationQuestion
            dest={dest}
            setDest={setDest} />
        )}
        {step === 3 && (
          <Pax
            pax={pax}
            setPax={setPax}
            paxChild={paxChild}
            setPaxChild={setPaxChild}
            age={age}
            setAge={setAge} />
        )}
        {step >= 4 && (
          <Confirmation
            name={name}
            phone={phone}
            dest={dest} 
            pax={pax}
            paxChild={paxChild}
            age={age} />
        )}
        {step >= 5 && (
          <ThankYouMessage message={message} setMessage={setMessage} />
        )}
        {step < 5 && (
          <div className="counter">
            <p>
              Current question: {step}
              <button className="nextButton" type="button" onClick={handleStepIncrease} onKeyPress={handleKeypress}>Next question</button>
            </p>
          </div>
        )}

      </div>
      <div className="header">
        <img src="https://images.unsplash.com/photo-1596906519349-f3907f48b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80" alt="landscape" />
      </div>
    </div>
  )
    } 