import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Hear } from 'components/Hear';
import { Overall } from 'components/Overall';
import { Delivery } from 'components/Delivery';
import { Purchase } from 'components/Purchase';
import { Rate } from 'components/Rate';

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

  const thankYouMessage = (
    <div>
      <h2>Thank you for participating in the survey!</h2>
      <p>Here is a summary of your responses:</p>
      <ul>
        <li>Name: {name}</li>
        <li>How did you hear about us?: {hear}</li>
        <li>Overall satisfaction: {overall}</li>
        <li>Delivery satisfaction: {delivery}</li>
        <li>Purchase satisfaction: {purchase}</li>
        <li>How likely are you to recommend us?: {rate}</li>
      </ul>
      <button type="button" onClick={handleReset}>Take the survey again</button>
    </div>
  );

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
        <button type="button" onClick={handleStepIncrease}>Next step</button>
      )}

      {step === 7 && thankYouMessage}
    </>
  );
};
