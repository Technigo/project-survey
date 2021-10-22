import React, { useState } from 'react';
import Start from './Start';
import FirstQuestionRating from './FirstQuestionRating';
import SecondQuestionAppUse from './SecondQuestionAppUse';
import ThirdQuestionEase from './ThirdQuestionEase';
import FourthQuestionLike from './FourthQuestionLike';
import FifthQuestionMore from './FifthQuestionMore';
import SixthQuestionPerformance from './SixthQuestionPerformance';
import SeventhQuestionReason from './SeventhQuestionReason';
import Summary from './Summary';
import Button from './Button';
//Style //
import './form.css';

const Form = () => {
  const [step, setStep] = useState(0);
  const [usage, setUsage] = useState('Type or select an option...');
  const [easeRange, setEaseRange] = useState(0)
  const [performanceRange, setPerformanceRange] = useState(0);
  

  const onStepChange = (event) => {
    
    event.target.innerText ==='Back' && setStep(step - 1);
    (event.target.innerText === 'OK' || event.target.innerText === 'Start') &&
       setStep(step + 1);
    
  };

  const onUsageChange = (event) => {
     setUsage (event)

  }

  const onEaseChange = (event) => {
    console.log('range1', event.target.value);
    setEaseRange(event.target.value);
  };
  const onPerformanceChange = (event) => {
    console.log('range2', event.target.value);
    setPerformanceRange(event.target.value);
  };
  return (
    <div className="mainForm">
      <form>
        {step === 0 && <Start onStepChange={onStepChange} />}
        {step === 1 && <FirstQuestionRating />}
        {step === 2 && (
          <SecondQuestionAppUse usage={usage} onUsageChange={onUsageChange} />
        )}
        {step === 3 && (
          <ThirdQuestionEase
            rangeValue={easeRange}
            onRangeChange={onEaseChange}
          />
        )}
        {step === 4 && <FourthQuestionLike />}
        {step === 5 && (
          <FifthQuestionMore textInput="Type your answer here..." />
        )}
        {step === 6 && (
          <SixthQuestionPerformance
            rangeValue={performanceRange}
            onRangeChange={onPerformanceChange}
          />
        )}
        {step === 7 && (
          <SeventhQuestionReason
            textInputPerformance="Type your answer here..."
            performanceRate="3"
          />
        )}
        {step === 8 && <Summary />}
      </form>
      <div className="buttons">
        {step !== 0 && step <= 6 && (
          <Button buttonText="OK" onStepChange={onStepChange} />
        )}
        {step > 1 && step <= 7 && (
          <Button buttonText="Back" onStepChange={onStepChange} />
        )}
      </div>
    </div>
  );
};

export default Form;
