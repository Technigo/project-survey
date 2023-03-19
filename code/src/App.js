import React, { useState } from 'react';
import { Header } from 'components/Header';
import { Name } from 'components/Name';
import { Hear } from 'components/Hear';
import { Overall } from 'components/Overall';
import { Delivery } from 'components/Delivery';
import { Purchase } from 'components/Purchase';
import { Rate } from 'components/Rate';
import { ThankYou } from 'components/Thanks';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [hear, setHear] = useState('');
  const [overall, setOverall] = useState('');
  const [delivery, setDelivery] = useState('');
  const [purchase, setPurchase] = useState('');
  const [rate, setRate] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };

  const handleReset = () => {
    // Reset all the state values
    setName('');
    setHear('');
    setOverall('');
    setDelivery('');
    setPurchase('');
    setRate('');
    // Set the step back to the first question
    setStep(1);
  };

  return (
    <>
      <Header />
      {step === 1 && (
        <Name
          name={name}
          setName={setName}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 2 && (
        <Hear
          hear={hear}
          setHear={setHear}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 3 && (
        <Delivery
          delivery={delivery}
          setDelivery={setDelivery}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 4 && (
        <Overall
          overall={overall}
          setOverall={setOverall}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 5 && (
        <Purchase
          purchase={purchase}
          setPurchase={setPurchase}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 6 && (
        <Rate
          rate={rate}
          setRate={setRate}
          step={step}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 7 && (
        <ThankYou
          name={name}
          hear={hear}
          overall={overall}
          delivery={delivery}
          purchase={purchase}
          rate={rate}
          handleReset={handleReset} />
      )}
    </>
  );
};
