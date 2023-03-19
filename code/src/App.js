/* eslint-disable max-len */
import React, { useState } from 'react';
import { Greeting } from 'components/Greeting';
import { Human } from 'components/Human';
import { Name } from 'components/Name';
import { Continent } from 'components/Continent';
import { BadNews } from 'components/BadNews';
import { Fitness } from 'components/Fitness';
import { Combat } from 'components/Combat';
import { Body } from 'components/Body';
import { Summary } from 'components/Summary';
import { Footer } from 'components/footer/Footer';
import { Weapon } from 'components/Weapon';
import zombie from 'components/zombie.png';

export const App = () => {
  const stepsTotalCount = 9;
  const [step, setStep] = useState(0);
  const [human, setHuman] = useState(false);
  const [name, setName] = useState('');
  const [continent, setContinent] = useState('');
  const [fitness, setFitness] = useState(0);
  const [combat, setCombat] = useState('');
  const [body, setBody] = useState('');
  const [weapon, setWeapon] = useState('');
  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  if (step < 4) {
    return (
      <>
        <section className="contentBox">
          <div className="questionBox">
            {step === 0 && (<Greeting />)}
            {step === 1 && (<Human human={human} setHuman={setHuman} />)}
            {step === 2 && (<Name name={name} setName={setName} />)}
            {step === 3 && (<Continent name={name} continent={continent} setContinent={setContinent} />)}
            {step === 4 && (<BadNews name={name} continent={continent} />)}
            {step === 5 && (<Fitness fitness={fitness} setFitness={setFitness} />)}
            {step === 6 && (<Combat combat={combat} setCombat={setCombat} />)}
            {step === 7 && (<Weapon weapon={weapon} setWeapon={setWeapon} />)}
            {step === 8 && (<Body body={body} setBody={setBody} />)}
            {step === 9 && (<Summary name={name} continent={continent} fitness={fitness} combat={combat} weapon={weapon} body={body} />)}
          </div>
          {step === 0 && (<button className="button" type="button" onClick={handleStepIncrease}> Start </button>)}
          {step >= 1 && step <= 8 && (<button className="button" type="button" onClick={handleStepIncrease}> Next </button>)}
          {step === 9 && (<button className="button" type="button" onClick={() => window.location.reload(false)}> Game Over </button>)}
        </section>
        <div className="progressBox">
          {step >= 1 && step < 9 && (
            <p className="progress-meter">
              <progress value={step} max={stepsTotalCount + 1}>
                {step} of {stepsTotalCount}
              </progress>
              <span>
                <br />
                <b>{step}</b> / {stepsTotalCount}
              </span>
            </p>
          )}
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="contentBox" style={{ backgroundImage: `url(${zombie})` }}>
          <div className="questionBox">
            {step === 0 && (<Greeting />)}
            {step === 1 && (<Human human={human} setHuman={setHuman} />)}
            {step === 2 && (<Name name={name} setName={setName} />)}
            {step === 3 && (<Continent name={name} continent={continent} setContinent={setContinent} />)}
            {step === 4 && (<BadNews name={name} continent={continent} />)}
            {step === 5 && (<Fitness fitness={fitness} setFitness={setFitness} />)}
            {step === 6 && (<Combat combat={combat} setCombat={setCombat} />)}
            {step === 7 && (<Weapon weapon={weapon} setWeapon={setWeapon} />)}
            {step === 8 && (<Body body={body} setBody={setBody} />)}
            {step === 9 && (<Summary name={name} continent={continent} fitness={fitness} combat={combat} weapon={weapon} body={body} />)}
          </div>
          {step === 0 && (<button className="button" type="button" onClick={handleStepIncrease}> Start </button>)}
          {step >= 1 && step <= 8 && (<button className="button" type="button" onClick={handleStepIncrease}> Next </button>)}
          {step === 9 && (<button className="button" type="button" onClick={() => window.location.reload(false)}> Game Over </button>)}
        </div>
        <div className="progressBox">
          {step >= 1 && step < 9 && (
            <p className="progress-meter">
              <progress value={step} max={stepsTotalCount + 1}>
                {step} of {stepsTotalCount}
              </progress>
              <span>
                <br />
                <b>{step}</b> / {stepsTotalCount}
              </span>
            </p>
          )}
        </div>
        <Footer />
      </>
    );
  }
}