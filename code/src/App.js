/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { SubmitButton } from 'components/SubmitButton';
import { DestinationQuestion } from './components/DestinationQuestion'
import { Pax } from './components/Pax'
import { Confirmation } from './components/Confirmation'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dest, setDest] = useState('');
  const [pax, setPax] = useState('');
  const [paxChild, setPaxChild] = useState('');
  const [age, setAge] = useState('');
  const [button, setButton] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
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
        <SubmitButton
          button={button}
          setButton={setButton} />
      )}

      {step < 5 && (
        <p>
       Current question: {step}
          <button className="nextButton" type="button" onClick={handleStepIncrease}>Next question</button>
        </p>
      )}

    </div>
  )
}

