/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
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
  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <section className="container">
      {(step === 1) && (
        <section className="header-container">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_nw3e7mtx.json"
            style={{ height: '150px', width: '150px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
          <h1 className="typewriter">WELCOME.</h1>
          <section className="name-input">
            <p>Let us begin by entering your name.</p>
            <Name name={name} setName={setName} />
          </section>
        </section>
      )}
      {(step === 2) && (
        <section className="form-input">
          <Animal animal={animal} setAnimal={setAnimal} />
        </section>
      )}
      {step === 3 && (
        <section className="form-input">
          <Job job={job} setJob={setJob} />
        </section>
      )}
      {step === 4 && (
        <section className="form-input">
          <Color color={color} setColor={setColor} />
        </section>
      )}
      {color === 'red' && (
        <p className="color-pick-msg">You choose: ❤️</p>
      )}
      {color === 'yellow' && (
        <p className="color-pick-msg">You choose: 💛</p>
      )}
      {color === 'pink' && (
        <p className="color-pick-msg">You choose: 💗</p>
      )}
      {color === 'green' && (
        <p className="color-pick-msg">You choose: 💚</p>
      )}
      {color === 'orange' && (
        <p className="color-pick-msg">You choose: 🧡</p>
      )}
      {color === 'violet' && (
        <p className="color-pick-msg">You choose: 💜</p>
      )}
      {color === 'blue' && (
        <p className="color-pick-msg">You choose: 💙</p>
      )}
      {step === 5 && (
        <Verb verb={verb} setVerb={setVerb} />
      )}
      {step === 6 && (
        <Adjective adjective={adjective} setAdjective={setAdjective} />
      )}
      {step === 7 && (
        <Result name={name} animal={animal} job={job} color={color} verb={verb} adjective={adjective} />
      )}
      {step < 7 && (
        <section className="step-counter">
          <p>
              Current step: {step}/5
          </p>
          <button id="next-step-btn" type="button" onClick={handleStepIncrease}>
              Next
          </button>
        </section>
      )}
    </section>
  );
}
