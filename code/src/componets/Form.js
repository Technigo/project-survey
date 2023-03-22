/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import headerImgSmall from '../assets/DSG-small.jpg';
import headerImgMedium from '../assets/DSG-medium.jpg';
import headerImgLarge from '../assets/DSG-large.jpg';
import './Form.css';

const ProgressBar = ({ progress }) => {
  const container = {
    height: 10,
    width: '100%',
    backgroundColor: '#ededed'
  };
  const bar = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#4fb0ae',
    borderRadius: 'inherit'
  };
  return (
    <div style={container}>
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export const Form = () => {
  const [inputName, setInputName] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputEnvironment, setInputEnvironment] = useState('');
  const [inputExperience, setInputExperience] = useState(null);
  const [inputTime, setInputTime] = useState(0);
  const [formStage, setFormStage] = useState(0);
  const [percent, setPercent] = useState(0);

  const resetForm = () => {
    setFormStage(0);
    setInputName('');
    setInputRole('');
    setInputEnvironment('');
    setInputExperience('');
    setPercent(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStage(formStage + 1);
    const correctPercent = (formStage * 100) / 6;
    setPercent(Number(correctPercent).toFixed(1));
  };

  return (
    <main>
      {formStage > 0 && <ProgressBar progress={percent} />}
      <div className="title">
        <p>
          {formStage < 5 ? formStage : 5}
          <span>→</span>
        </p>

        <h1>Mentorship Sign Up</h1>
      </div>
      <div className="image-box">
        <picture>
          <source media="(min-width:1042px)" srcSet={headerImgLarge} />
          <source media="(min-width: 768px)" srcSet={headerImgMedium} />
          <img src={headerImgSmall} alt="Sign with text: Do something Great" />
        </picture>
      </div>
      {formStage >= 1 && (
        <button className="reset-button" type="button" onClick={resetForm}>
          Restart Form
        </button>
      )}
      <form onSubmit={handleSubmit} required>
        {formStage === 0 && (
          <div>
            <h2>
              Welcome to the mentor sign up survey, thank you for showing
              interest in becoming a mentor, press ok to continue in the form.
              Please take a few minutes to fill in this survey to start your
              journey in becoming a mentor.
            </h2>
          </div>
        )}
        {formStage === 1 && (
          <div>
            <h1>What is your name? *</h1>
            <input
              type="text"
              value={inputName}
              aria-required="true"
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              required
            />
          </div>
        )}
        {formStage === 2 && (
          <div>
            <h1>What is your current roll? *</h1>
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
            <h1>What time commitment can I make? /Hours a month/ *</h1>
            <input
              type="range"
              min="1"
              max="100"
              value={inputTime}
              onChange={(e) => {
                setInputTime(e.target.value);
              }}
              required
            />
            <p>Time I can commit: {inputTime} h/month</p>
          </div>
        )}
        {formStage === 4 && (
          <div>
            <h1>What is your preferred meeting eviroment? *</h1>
            <input
              type="text"
              value={inputEnvironment}
              onChange={(e) => {
                setInputEnvironment(e.target.value);
              }}
              required
            />
          </div>
        )}
        {formStage === 5 && (
          <div>
            <h1>Have you been a mentor before? *</h1>
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
        {formStage === 6 && (
          <div>
            <p>Thank you {inputName} for siging up on this mentor program</p>
            <p>Role: {inputRole}</p>
            <p>Commited time: {inputTime} h/month</p>
            <p>Exp: {inputExperience}</p>
            <p>Eviroment: {inputEnvironment}</p>
          </div>
        )}
        {formStage === 7 && (
          <h2>Thank you, we will contact you when a match is found ❤️</h2>
        )}
        {formStage < 6 && (
          <div>
            <button className="submit-button next" type="submit">
              Ok ✓
            </button>
          </div>
        )}
        {formStage === 6 && (
          <button className="submit-button submit" type="submit">
            Submit
          </button>
        )}
      </form>
    </main>
  );
};
