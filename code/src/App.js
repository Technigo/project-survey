import React, { useState } from 'react';

import StartScreen from 'components/StartScreen'
import Name  from 'components/Name';
import Email from 'components/Email';
import Pun from 'components/Pun';
import Chickenjoke from 'components/Chickenjoke';
import Result from 'components/Result';


export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pun, setPun] = useState('');
  const [chickenjoke, setChickenjoke] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <>
      {step === 0 && (
     <StartScreen 
     handleStepIncrease={handleStepIncrease} />
      )}

      {step === 1 && (
        <Name 
        name={name} 
        setName={setName}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease} />
      )}

      {step === 2 && (
        <Email 
        email={email} 
        setEmail={setEmail}
        Result name={name}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease} />
      )}
      
      {step === 3 && (
        <Pun
        pun={pun} 
        setPun={setPun} 
        handleStepIncrease={handleStepIncrease} 
        handleStepDecrease={handleStepDecrease}/>
      )}

      {step === 4 && (
        <Chickenjoke 
        chickenjoke={chickenjoke} 
        setChickenjoke={setChickenjoke}
        handleStepIncrease={handleStepIncrease}
        handleStepDecrease={handleStepDecrease}/>
      )}

      {step >= 5 && (
        <Result 
        name={name} 
        pun={pun} 
        chickenjoke={chickenjoke}
        email={email} />
      )}

    </>
  );
}
