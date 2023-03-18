/* eslint-disable max-len */
import React, { useState } from 'react';
import { Greeting } from 'Greeting';
import { Name } from 'components/Name';
import { Continent } from 'components/Continent';
import { BadNews } from 'components/BadNews';
import { Fitness } from 'components/Fitness';
import { Combact } from 'components/Combact';
import { Body } from 'components/Body';
import { Summary } from 'components/Summary';
import { Footer } from 'components/footer/Footer';

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [continent, setContinent] = useState('');
  const [fitness, setFitness] = useState(0);
  const [combact, setCombact] = useState('');
  const [body, setBody] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  return (
    <section className="contentBox">
      <div className="question">
        {step === 0 && (<Greeting />)}
        {step === 1 && (<Name name={name} setName={setName} />)}
        {step === 2 && (<Continent name={name} continent={continent} setContinent={setContinent} />)}
        {step === 3 && (<BadNews name={name} continent={continent} />)}
        {step === 4 && (<Fitness fitness={fitness} setFitness={setFitness} />)}
        {step === 5 && (<Combact combact={combact} setCombact={setCombact} />)}
        {step === 6 && (<Body body={body} setBody={setBody} />)}
        {step === 7 && (<Summary name={name} continent={continent} fitness={fitness} combact={combact} body={body} />)}
      </div>
      <button type="button" onClick={handleStepIncrease}> Click for hope </button>
      <Footer />
    </section>
  );
}