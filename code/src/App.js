
import React, { useState } from 'react';
import { Result } from 'components/Result';
import { WeeklyTraining } from 'components/WeeklyTraining';
import { AgeGroup } from './components/AgeGroup';
import { YesNoQuestion } from './components/YesNoQuestion';
import { SportType } from './components/SportType';

export const App = () => {
  const [step, setStep] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [answer, setAnswer] = useState('');
  const [sportType, setSportType] = useState('');
  const [weeklyTraining, setWeeklyTraining] = useState('');

  const handleNavButtonsClick = (shouldIncrease) => {
    if (shouldIncrease && step < 6) {
      setStep(step + 1)
    } else if (!shouldIncrease && step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="wrapper">
      {step === 1
       && (<AgeGroup ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
       )}
      {step === 2
      && (<YesNoQuestion answer={answer} setAnswer={setAnswer} />
      )}
      {step === 3
      && (<SportType sportType={sportType} setSportType={setSportType} />
      )}
      {step === 4 && (
        <>
          <WeeklyTraining weeklyTraining={weeklyTraining} setWeeklyTraining={setWeeklyTraining} />
          <button type="button" value={step} onClick={() => handleNavButtonsClick(false)}>Previous Question</button>
          <input type="submit" value="Submit" onClick={() => handleNavButtonsClick(true)} />
        </>
      )}

      {step >= 5
      && (<Result
        ageGroup={ageGroup}
        answer={answer}
        sportType={sportType}
        weeklyTraining={weeklyTraining} />
      )}

      {step < 5
      && (<p>current question: {step}/4</p>
      )}

      {step < 4 && (
        <>
          <button type="button" value={step} onClick={() => handleNavButtonsClick(false)}>Previous Question</button>
          <button type="button" value={step} onClick={() => handleNavButtonsClick(true)}>Next Question</button>
        </>
      )}
    </div>
  );
}
