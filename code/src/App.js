/* eslint-disable max-len */
import React, { useState } from 'react';
import { Greeting } from 'components/Greeting';
import { Human } from 'components/Human';
import { Name } from 'components/Name';
import { Continent } from 'components/Continent';
import { BadNews } from 'components/BadNews';
import { Fitness } from 'components/Fitness';
import { Combact } from 'components/Combact';
import { Body } from 'components/Body';
import { Summary } from 'components/Summary';
import { Footer } from 'components/footer/Footer';
import { Weapon } from 'components/Weapons';

export const App = () => {
  const [step, setStep] = useState(0);
  const [human, setHuman] = useState(false);
  const [name, setName] = useState('');
  const [continent, setContinent] = useState('');
  const [fitness, setFitness] = useState(0);
  const [combact, setCombact] = useState('');
  const [body, setBody] = useState('');
  const [weapon, setWeapon] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  return (
    <section className="contentBox">
      <div className="questionBox">
        {step === 0 && (<Greeting />)}
        {step === 1 && (<Human human={human} setHuman={setHuman} />)}
        {step === 2 && (<Name name={name} setName={setName} />)}
        {step === 3 && (<Continent name={name} continent={continent} setContinent={setContinent} />)}
        {step === 4 && (<BadNews name={name} continent={continent} />)}
        {step === 5 && (<Fitness fitness={fitness} setFitness={setFitness} />)}
        {step === 6 && (<Combact combact={combact} setCombact={setCombact} />)}
        {step === 7 && (<Weapon weapon={weapon} setWeapon={setWeapon} />)}
        {step === 8 && (<Body body={body} setBody={setBody} />)}
        {step === 9 && (<Summary name={name} continent={continent} fitness={fitness} combact={combact} weapon={weapon} body={body} />)}
      </div>
      <button type="button" onClick={handleStepIncrease}> Click for hope </button>
      <Footer />
    </section>
  );
}