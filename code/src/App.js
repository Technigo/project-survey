import React, { useState } from 'react';

import { Welcome } from 'components/Welcome';
import { Step } from 'components/Step';
import { Name } from 'components/Name';
import { Age } from 'components/Age';
import { Recycle } from 'components/Recycle';
import { Scale } from 'components/Scale';
import { Result } from 'components/Result';
import { Progress } from 'components/Progress';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('Anonymous');
  const [age, setAge] = useState('');
  const [recycle, setRecycle] = useState('');
  const [scale, setScale] = useState('');

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        {step === 0 && (
          <Welcome step={step} setStep={setStep} />
        )}
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}
        {step === 2 && (
          <Age age={age} setAge={setAge} />
        )}
        {step === 3 && (
          <Recycle recycle={recycle} setRecycle={setRecycle} />
        )}
        {step === 4 && (
          <Scale scale={scale} setScale={setScale} step={step} setStep={setStep} />
        )}
        {step >= 5 && (
          <Result name={name} age={age} recycle={recycle} scale={scale} />
        )}
        {step <= 3 && (
          <Step step={step} setStep={setStep} />
        )}
        {step >= 1 && (
          <Progress step={step} setStep={setStep} />
        )}
      </div>
    </div>
  );
}

/* import Form from './components/Form'

{questionNum === 0 &&  <HeroSection nextQuestion = {nextQuestion}/>} */