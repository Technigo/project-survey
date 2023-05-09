/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Name } from './components/Name';
import { Animal } from './components/Animal';
import { Color } from './components/Color';
import { Result } from './components/Result';
import { Job } from './components/Job';
import { Verb } from './components/Verb';
import { Adjective } from './components/Adjective';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [job, setJob] = useState('');
  const [color, setColor] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);
  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <section className="container">
      {(step === 1) && (
        <section className="header-container">
          <h1>MADLIBS GAME</h1>
          <p className="typewriter">WELCOME TO A MADLIBS GAME CREATED BY TESS AQUILON.</p>
          <section className="name-form">
            <p>Enter your</p>
            <Name name={name} setName={setName} />
            <p>to continue.</p>
          </section>
        </section>
      )}
      {(step === 2) && (
        <>
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_nw3e7mtx.json"
            style={{ height: '150px', width: '150px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
          <section className="form-input">
            <Animal animal={animal} setAnimal={setAnimal} />
          </section>
        </>
      )}
      {step === 3 && (
        <section className="form-input">
          <Job job={job} setJob={setJob} />
        </section>
      )}
      {step === 4 && (
        <section className="form-input">
          <Color color={color} setColor={setColor} />
          {color === 'red' && (
            <p className="color-pick-msg">You choose: <span>❤️</span></p>
          )}
          {color === 'yellow' && (
            <p className="color-pick-msg">You choose: <span>💛</span></p>
          )}
          {color === 'pink' && (
            <p className="color-pick-msg">You choose: <span>💗</span></p>
          )}
          {color === 'green' && (
            <p className="color-pick-msg">You choose: <span>💚</span></p>
          )}
          {color === 'orange' && (
            <p className="color-pick-msg">You choose: <span>🧡</span></p>
          )}
          {color === 'violet' && (
            <p className="color-pick-msg">You choose: <span>💜</span></p>
          )}
          {color === 'blue' && (
            <p className="color-pick-msg">You choose: <span>💙</span></p>
          )}
        </section>
      )}
      {step === 5 && (
        <section className="form-input">
          <Verb verb={verb} setVerb={setVerb} />
        </section>
      )}
      {step === 6 && (
        <section className="form-input">
          <Adjective adjective={adjective} setAdjective={setAdjective} />
        </section>
      )}
      {step === 7 && (
        <section className="result">
          {isVisible && <Result name={name} animal={animal} job={job} color={color} verb={verb} adjective={adjective} />}
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_jpxsQh.json"
            style={{ height: '150px', width: '150px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </section>
      )}
      {step < 7 && (
        <section className="step-counter">
          <p>
              Current step: {step}/6
          </p>
          <button id="next-step-btn" type="button" onClick={handleStepIncrease}>
              Next
          </button>
        </section>
      )}
    </section>
  );
}
