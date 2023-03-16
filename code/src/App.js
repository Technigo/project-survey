import React, { useState } from 'react';
import { Name } from 'components/Name/Name';
import { Hear } from 'components/Hear/Hear';
import { Overall } from 'components/Overall/Overall';
import { Delivery } from 'components/Delivery/Delivery';
import { Purchase } from 'components/Purchase/Purchase';
import { Rate } from 'components/Rate/Rate';
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
      {step === 1 && (
        <Name
          name={name}
          setName={setName}
          step={step} />
      )}
      {step === 2 && (
        <Hear
          hear={hear}
          setHear={setHear}
          step={step} />
      )}
      {step === 3 && (
        <Delivery
          delivery={delivery}
          setDelivery={setDelivery}
          step={step} />
      )}
      {step === 4 && (
        <Overall
          overall={overall}
          setOverall={setOverall}
          step={step} />
      )}
      {step === 5 && (
        <Purchase
          purchase={purchase}
          setPurchase={setPurchase}
          step={step} />
      )}
      {step === 6 && (
        <Rate
          rate={rate}
          setRate={setRate}
          step={step} />
      )}
      {step < 7 && (
        <button type="button" onClick={handleStepIncrease}>Next question</button>
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