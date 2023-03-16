import React, { useState, useRef } from 'react';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Name } from './components/Name/Name';
import { Date } from './components/Date/Date';
import { Transportation } from './components/Transportation/Transportation';
import { Equipment } from './components/Equipment/Equipment';
import { Textbox } from './components/Textbox/Textbox';
import { Summary } from './components/Summary/Summary';
import { ButtonNext } from './components/Buttons/ButtonNext/ButtonNext';

export const App = () => {
  const [step, setStep] = useState(0);
  const [intro, setIntro] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [transportation, setTransportation] = useState('');
  const [equipment, setEquipment] = useState('');
  const [textbox, setTextbox] = useState('');
  const formRef = useRef(null);

  const handleStepIncrease = () => {
    if (formRef.current.checkValidity()) {
      if (step === 0) {
        setStep(1);
      } else {
        setStep(step + 1);
      }
    } else {
      formRef.current.reportValidity();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(6);
  };

  return (
    <>
      <Header />
      <form ref={formRef} onSubmit={handleSubmit}>
        {step === 0 && (
          <Intro
            intro={intro}
            setIntro={setIntro}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 1 && <Name name={name} setName={setName} />}
        {step === 2 && <Date date={date} setDate={setDate} />}
        {step === 3 && (
          <Transportation
            transportation={transportation}
            setTransportation={setTransportation} />
        )}
        {step === 4 && (
          <Equipment equipment={equipment} setEquipment={setEquipment} />
        )}
        {step === 5 && <Textbox textbox={textbox} setTextbox={setTextbox} />}
        {step === 6 && (
          <Summary
            name={name}
            date={date}
            transportation={transportation}
            equipment={equipment}
            textbox={textbox}
            handleStepIncrease={() => setStep(6)}
            handleSubmit={handleSubmit} />
        )}
        {step > 0 && step < 5 && (
          <>
            <p>Current step: {step}/5</p>
            <ButtonNext onClick={handleStepIncrease} />
          </>
        )}
      </form>
    </>
  );
};
