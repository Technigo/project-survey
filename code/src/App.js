import React, { useState } from 'react';
import { Name } from 'components/Name';
import { City } from 'components/City';
import { Age } from 'components/Age';
import { Level } from 'components/Level';
import { Writing, Better } from 'components/Writing';
import { Email } from 'components/Email'
import  Progressbar from 'components/Progressbar';
import  Result  from 'components/Result';

// import { Rate} from 'components/Rate' --> to finish later  
 //const [rate, setRate] = useState(''); // range-slider not finished, use for later

export const App = () => { 
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [level, setLevel] = useState('');
  const [writing, setWriting] = useState('');
  const [better, setBetter] = useState('');
  const [email, setEmail] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
    <header className="header">
      <h1>Windsurfing course survey</h1>
    </header>

    <section class="section-survey">

    {step === 1 && ( 
    <>
      <Name name={name} setName={setName} />
      <Email email={email} setEmail={setEmail} />
    </>
    )}
    
    {step === 2 && (
    <>
      <Age age={age} setAge={setAge} />
    </>
    )}

  {step === 3 && (
    <>
      <City city={city} setCity={setCity} />
    </>
    )}

  {step === 4 && (
    <>
      <Level level={level} setLevel={setLevel} /> 
    </>
    )}

  {step === 5 && (
  <>
    <div>
      <Writing writing ={writing} setWriting={setWriting} />
      <Better better={better} setBetter={setBetter} />
    </div>
    </>
    )}

    {step >= 6&& (
      <Result name={name} age={age} city={city} level={level} writing={writing} better={better} email={email}  />
    )}

   
  {step < 6 && (
  <>
    <button className="step-button" type="button" onClick={handleStepIncrease}>Next step</button>
    <Progressbar step={step} />
  </>
  )}
    </section></>
  );
}



 /* {step === 6 && (
    <Rate rate ={rate} setRate={setRate} />
  )} */





 