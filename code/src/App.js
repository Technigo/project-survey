import React, { useState, useRef } from 'react';
import { Header } from './components/Header/Header';
import { Name } from './components/Name/Name';
import { Date } from './components/Date/Date';
import { Transportation } from './components/Transportation/Transportation';
import { SkiEquip } from './components/SkiEquip/SkiEquip';
import { Textbox } from './components/Textbox/Textbox';
import { Summary } from './components/Summary/Summary';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('')
  const [date, setDate] = useState('');
  const [transportation, setTransportation] = useState('');
  const [skiEquip, setSkiEquip] = useState('');
  const [textbox, setTextbox] = useState('');
  const formRef = useRef(null);

  const handleStepIncrease = () => {
    if (formRef.current.checkValidity()) {
      setStep(step + 1);
    } else {
      formRef.current.reportValidity();
    }
  }

  return (
    <>
      <Header />
      <form ref={formRef}>
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}
        {step === 2 && (
          <Date date={date} setDate={setDate} />
        )}
        {step === 3 && (
          <Transportation transportation={transportation} setTransportation={setTransportation} />
        )}
        {step === 4 && (
          <SkiEquip skiEquip={skiEquip} setSkiEquip={setSkiEquip} />
        )}
        {step === 5 && (
          <Textbox textbox={textbox} setTextbox={setTextbox} />
        )}
        {step === 6 && (
          <Summary
            name={name}
            date={date}
            transportation={transportation}
            skiEquip={skiEquip}
            textbox={textbox} />
        )}
        {step < 6 && (
          <>
            <p>Current step: {step}</p>
            <button type="button" onClick={handleStepIncrease}>Next</button>
          </>
        )}
      </form>
    </>
  );
}
