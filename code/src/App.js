import React, { useState } from 'react';

import { Step } from 'components/Step';
import { Name } from 'components/Name';
import { Age } from 'components/Age';
import { Recycle } from 'components/Recycle';
import { Drink } from 'components/Drink';
import { Result } from 'components/Result';
import { Progress } from 'components/Progress';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('Anonymous');
  const [age, setAge] = useState('');
  const [recycle, setRecycle] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  const handleStepDecrease = () => {
    setStep(step - 1);
  }

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        {step === 0 && (
          <Name name={name} setName={setName} />
        )}
        {step === 1 && (
          <Age age={age} setAge={setAge} />
        )}
        {step === 2 && (
          <Recycle recycle={recycle} setRecycle={setRecycle} />
        )}
        {step === 3 && (
          <Drink drink={drink} setDrink={setDrink} />
        )}
        {step >= 4 && (
          <Result name={name} age={age} recycle={recycle} drink={drink} />
        )}
        <Step step={step} setStep={setStep} />
        <Progress step={step} />

      </div>
    </div>
  );
}

/* import Form from './components/Form'

{questionNum === 0 &&  <HeroSection nextQuestion = {nextQuestion}/>} */