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

  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <>
      {step === 0 && (
        <LandingPage
          handleStepIncrease={handleStepIncrease} />
      )}
      {step === 1 && (
        <Department
          department={department}
          setDepartment={setDepartment}
          handleStepDecrease={handleStepDecrease} />
      )}
      {step === 2 && (
        <Climate
          climate={climate}
          setClimate={setClimate} />
      )}
      {step === 3 && (
        <Activity
          activity={activity}
          setActivity={setActivity}
          handleStepIncrease={handleStepIncrease} />
      )}
      {step >= 4 && (
        <Result
          department={department}
          climate={climate}
          activity={activity} />
      )}
      {step >= 1 && step <= 3 && (
        <>
          <div className="buttonContainer">
            <button type="button" className="buttonBack" onClick={handleStepDecrease}>Back</button>
            <button type="button" className="buttonNext" onClick={handleStepIncrease}>Next</button>
          </div>
          <div className="step">
            <p>Step {step}/3</p>
          </div>
        </>
      )}
    </>
  );
}
