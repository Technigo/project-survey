import React, { useState } from 'react';
import { Name } from 'components/Name';
import { OfficeImprovement } from 'components/OfficeImprovement';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [improveInput, setImproveInput] = useState('');

//   const handleStepIncrease = () => {
//     setStep(step + 1);
//   }

  return (
    <section className="wrapper">
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <OfficeImprovement improveInput={improveInput} setImproveInput={setImproveInput} />
      )}
    </section>
  )
}

export default Survey