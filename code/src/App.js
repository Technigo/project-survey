/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { DestinationQuestion } from './components/DestinationQuestion'
import { Pax } from './components/Pax'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState('');
  const [pax, setPax] = useState('');
  const [paxChild, setPaxChild] = useState('');
  const [age, setAge] = useState('')
  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <WelcomeMessage name={name} setName={setName} />
      )}
      {step === 2 && (
        <DestinationQuestion dest={dest} setDest={setDest} />
      )}
      {step === 3 && (
        <DestinationQuestion dest={dest} setDest={setDest} />
      )}
      {step >= 4 && (
        <Pax pax={pax} setPax={setPax} />
      )}

      {step < 5 && (
        <p>
       Current question: {step}
          <button className="nextButton" type="button" onClick={handleStepIncrease}>Next question</button>
        </p>
      )}
    </>
  )
}

