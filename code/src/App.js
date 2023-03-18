/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Age } from './components/Age';
import { Gender } from './components/Gender';
import { Result } from './components/Result';
import { Country } from './components/Country';
import { Happy } from './components/Happy';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [happy, setHappy] = useState(50);
  const [error, setError] = useState(false);
  const handleStepIncrease = () => {
    setStep(step + 1);
    setError(false);
    if (name.length <= 1) {
      setError(true);
      setStep(2);
    } else if (age <= -1) {
      setError(true);
      setStep(3);
    }
  }
  return (
    <>
      {(step === 1) && (
        <>
          <h1 className="typewriter">Hi and welcome to my survey!</h1>
          <p>Please begin by filling out your name.</p>
          <Name name={name} setName={setName} />
        </>
      )}
      {(step === 2) && (
        <Age age={age} setAge={setAge} />
      )}
      {step === 3 && (
        <Gender gender={gender} setGender={setGender} />
      )}
      {step === 4 && (
        <Country country={country} setCountry={setCountry} />
      )}
      {step === 5 && (
        <Happy happy={happy} setHappy={setHappy} />
      )}
      {step === 6 && (
        <Result name={name} age={age} gender={gender} country={country} happy={happy} />
      )}
      {step < 6 && (
        <>
          <p>
            Current step: {step}/5
          </p>
          <button type="button" onClick={handleStepIncrease}>
            Next
          </button>
        </>
      )}
      {error && (<p>Please fill out this field.</p>)}
      {error && (<p>Field required.</p>)}
    </>
  );
}
