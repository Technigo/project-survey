import React, { useState } from 'react';
import { LandingPage } from 'components/LandingPage';
import { Department } from 'components/Department';
import { Climate } from 'components/Climate';
import { Activity } from 'components/Activity';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(0);
  const [department, setDepartment] = useState('');
  const [climate, setClimate] = useState('');
  const [activity, setActivity] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 0 && (
        <LandingPage step={step} setStep={setStep} />
      )}
      {step === 1 && (
        <Department department={department} setDepartment={setDepartment} />
      )}
      {step === 2 && (
        <Climate climate={climate} setClimate={setClimate} />
      )}
      {step === 3 && (
        <Activity activity={activity} setActivity={setActivity} />
      )}
      {step >= 4 && (
        <Result department={department} climate={climate} activity={activity} />
      )}

      {step < 4 && (
        <>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
          <p>Question {step}/4</p>
        </>
      )}
    </>
  );
}
