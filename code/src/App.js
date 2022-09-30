import React, { useState } from 'react';

import { Name } from 'components/Name';
import { City } from 'components/City';
import { Age } from 'components/Age';
import { Level } from 'components/Level';
import { Writing} from 'components/Writing';
import { Better } from 'components/Writing'
import { Rate} from 'components/Rate'
import { Email } from 'components/Email'
import  Result  from 'components/Result';

//import "react-step-progress-bar/styles.css"; --> for later
//import { ProgressBar, Step } from "react-step-progress-bar"; --> for later
  


export const App = () => { 
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [level, setLevel] = useState('');
  const [writing, setWriting] = useState('');
  const [better, setBetter] = useState('');
  const [rate, setRate] = useState('');
  const [email, setEmail] = useState('');


  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (

    <>
    <header className="header">
      <h1>Windsurfing course Survey</h1>
    </header>

    <section class="section">
    <p>Current step: {step} of 5</p>
    {step === 1 && ( 
      <Name name={name} setName={setName} />
    )}

    {step === 1 && ( 
      <Email email={email} setEmail={setEmail} />
    )}

    {step === 2 && (
      <Age age={age} setAge={setAge} />
    )}

  {step === 3 && (
      <City city={city} setCity={setCity} />
    )}

  {step === 4 && (
      <Level level={level} setLevel={setLevel} /> 
    )}

  {step === 5 && (
    <div>
      <Writing writing ={writing} setWriting={setWriting} />
      <Better better={better} setBetter={setBetter} />
    </div>
    )}


<section>
    {step >= 6&& (
      <Result name={name} age={age} city={city} level={level} writing={writing} better={better} email={email} rate={rate} />
    )}
</section>

      {step < 6 && (
        <>
          <button className="step-button" type="button" onClick={handleStepIncrease}>Next step</button> 
        </>
      )}

    </section></>
  );
}



 /* {step === 6 && (
    <Rate rate ={rate} setRate={setRate} />
  )} */





 