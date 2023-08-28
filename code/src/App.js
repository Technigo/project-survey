/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react';
import { Button } from 'components/Button';

export const App = () => {
  const [step, setStep] = useState(1);
    const handleStepIncrease = () => {
        setStep(step + 1);
      }
  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        {(step === 1) && (
          <Button onClick={handleStepIncrease}/>
        )}
      </section>
    </section>
  );
}
