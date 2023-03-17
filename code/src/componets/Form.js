/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';

const ProgressBar = ({ progress }) => {
  const container = {
    height: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 50
  };
  const bar = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#90CAF9',
    borderRadius: 'inherit'
  };
  const label = {
    padding: '1rem',
    color: '#000000'
  };
  return (
    <div style={container}>
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={label}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export const Form = () => {
  const [inputName, setInputName] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputEnvironment, setInputEnvironment] = useState('');
  const [inputExperience, setInputExperience] = useState(null);
  const [formStage, setFormStage] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setFormStage(formStage + 1);
    if (formStage >= 6) {
      setFormStage(0);
      setInputName('');
      setInputRole('');
      setInputEnvironment('');
      setInputExperience('');
    }
  }

  return (
    <section>
      <p>
        {formStage < 5 ? formStage : 5}
        <span>→</span>
      </p>
      <ProgressBar progress={60} />
      <h1>Mentorship Sign Up</h1>
      <form onSubmit={handleSubmit} required>
        {formStage === 0 && (
          <div>
            <h2>
              Welcome to the mentor sign up form, thankyou for showing intresst
              in becoming a mentor, pleas press ok to continu in the form.
            </h2>
          </div>
        )}
        {formStage === 1 && (
          <div>
            <h1>What is your name?</h1>
            <input
              type="text"
              value={inputRole}
              onChange={(e) => {
                setInputRole(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>
        )}
        {formStage === 2 && (
          <div>
            <h1>What is your current roll?</h1>
            <select
              onChange={(e) => {
                setInputRole(e.target.value);
              }}
              value={inputRole}
              required
            >
              <option value="">Pick a roll</option>
              <option value="Developer">Developer</option>
              <option value="HR">HR / Recruter</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}
        {formStage === 3 && (
          <div>
            <h1>Whats your preferd meeting eviroment??</h1>
            <input
              type="text"
              value={inputEnvironment}
              onChange={(e) => {
                setInputEnvironment(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>
        )}
        {formStage === 4 && (
          <div>
            <h1>Have you been a mentor before?</h1>
            <label htmlFor="yes">
              <input
                name="experience"
                type="radio"
                value="Yes"
                onChange={(e) => {
                  setInputExperience(e.target.value);
                  console.log(e.target.value);
                }}
                checked={inputExperience === 'Yes'}
                required
              />
              Yes
            </label>
            <label htmlFor="no">
              <input
                name="experience"
                type="radio"
                value="No"
                onChange={(e) => {
                  setInputExperience(e.target.value);
                  console.log(e.target.value);
                }}
                checked={inputExperience === 'No'}
                required
              />
              No
            </label>
          </div>
        )}
        {formStage === 5 && (
          <div>
            <p>Thank you {inputName} for siging up on this mentor program</p>
            <p>Role: {inputRole}</p>
            <p>Exp: {inputExperience}</p>
            <p>Eviroment: {inputEnvironment}</p>
          </div>
        )}
        {formStage === 6 && <h2>Thanks!</h2>}
        {formStage < 5 && <button type="submit">Next »</button>}
        {formStage === 5 && <button type="submit">Submit</button>}
        {formStage >= 1 && <button type="submit">Restart Form</button>}
      </form>
    </section>
  );
};
