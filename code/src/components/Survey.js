import React, { useState } from 'react';
import { Name } from 'components/Name';
import { OfficeImprovement } from 'components/OfficeImprovement';
import { TeamEvent } from './TeamEvent';
import { Summary } from './Summary';

export const Survey = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [improveInput, setImproveInput] = useState('');
  const [teamEvent, setTeamEvent] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {/* <div className="header">
        <img src="https://images.assetsdelivery.com/compings_v2/fizkes/fizkes2006/fizkes200600269.jpg" alt="header" />
      </div> */}
      <div className="wrapper">
        <div>
          {step === 1 && (
            <Name name={name} setName={setName} />
          )}
          {step === 2 && (
            <OfficeImprovement
              improveInput={improveInput}
              setImproveInput={setImproveInput}
              handleStepIncrease={handleStepIncrease} />
          )}
          {step === 3 && (
            <TeamEvent teamEvent={teamEvent} setTeamEvent={setTeamEvent} />
          )}
          {step >= 4 && (
            <Summary name={name} teamEvent={teamEvent} improveInput={improveInput} />
          )}
          {step < 3 && (
            <>
              {/* <p>Current step: {step}</p> */}
              <br />
              <div className="button-forward">
                <button className="button-next" type="button" onClick={handleStepIncrease}>Next Question</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              {/* <p>Current step: {step}</p> */}
              <br />
              <div className="button-finish" />
              <button className="button-submit" type="button" onClick={handleStepIncrease}>Submit</button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

