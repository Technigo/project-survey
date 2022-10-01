
import React, { useState } from 'react';
import { StartButton } from 'components/StartButton';
import { Result } from 'components/Result';
import { WeeklyTraining } from 'components/WeeklyTraining';
import { PreviousButton } from 'components/PreviousButton';
import { NextButton } from 'components/NextButton';
import { SubmitButton } from 'components/SubmitButton';
import { Intro } from 'components/Intro';
import { AgeGroup } from './components/AgeGroup';
import { YesNoQuestion } from './components/YesNoQuestion';
import { SportType } from './components/SportType';

export const App = () => {
  const [step, setStep] = useState(0);
  const [ageGroup, setAgeGroup] = useState('');
  const [answer, setAnswer] = useState('');
  const [sportType, setSportType] = useState('');
  const [weeklyTraining, setWeeklyTraining] = useState('');

  return (
    <main className="wrapper">
      {step === 0
       && (
         <div>
           <Intro />
           <StartButton step={step} setStep={setStep} />
         </div>
       )}
      {step === 1
       && (
         <div className="questionContainer">
           <AgeGroup ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
           <p className="displayStep">Question: {step}/4</p>
           <NextButton step={step} setStep={setStep} />
         </div>
       )}
      {step === 2
      && (
        <div className="questionContainer">
          <YesNoQuestion answer={answer} setAnswer={setAnswer} />
          <p className="displayStep">Question: {step}/4</p>
          <PreviousButton step={step} setStep={setStep} />
          <NextButton step={step} setStep={setStep} />
        </div>
      )}
      {step === 3
      && (
        <div className="questionContainer">
          <SportType sportType={sportType} setSportType={setSportType} />
          <p className="displayStep">Question: {step}/4</p>
          <PreviousButton step={step} setStep={setStep} />
          <NextButton step={step} setStep={setStep} />
        </div>
      )}
      {step === 4 && (
        <div className="questionContainer">
          <WeeklyTraining weeklyTraining={weeklyTraining} setWeeklyTraining={setWeeklyTraining} />
          <p className="displayStep">Question: {step}/4</p>
          <PreviousButton step={step} setStep={setStep} />
          <SubmitButton step={step} setStep={setStep} />
        </div>
      )}
      {/* shows the result of the survey */}
      {step >= 5
      && (
        <div className="questionContainer">
          <Result
            ageGroup={ageGroup}
            answer={answer}
            sportType={sportType}
            weeklyTraining={weeklyTraining} />
        </div>
      )}

    </main>
  );
}
