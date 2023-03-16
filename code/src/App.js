import React, { useState, useRef } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Name } from './components/Name/Name';
import { Date } from './components/Date/Date';
import { Transportation } from './components/Transportation/Transportation';
import { Equipment } from './components/Equipment/Equipment';
import { AddInfo } from './components/AddInfo/AddInfo';
import { Summary } from './components/Summary/Summary';
import { ButtonNext } from './components/Buttons/ButtonNext/ButtonNext';

export const App = () => {
  const [step, setStep] = useState(0);
  const [intro, setIntro] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [transportation, setTransportation] = useState('');
  const [equipment, setEquipment] = useState('');
  const [addInfo, setAddInfo] = useState('');
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
    <main className="main-wrapper">
      <Header />
      <form className="question-wrappers" ref={formRef} onSubmit={handleSubmit}>
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
        {step === 5 && (
          <AddInfo
            addInfo={addInfo}
            setAddInfo={setAddInfo}
            textbox={textbox}
            setTextbox={setTextbox}
            handleSubmit={handleSubmit} />
        )}
        {step === 6 && (
          <Summary
            name={name}
            date={date}
            transportation={transportation}
            equipment={equipment}
            addInfo={addInfo}
            textbox={textbox}
            handleStepIncrease={() => setStep(6)} />
        )}
        {step > 0 && step < 5 && (
          <>
            <ButtonNext onClick={handleStepIncrease} />
            <p className="step-counter">Current step: {step}/5</p>
          </>
        )}
      </form>
    </main>
  );
};
