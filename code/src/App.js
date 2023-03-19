/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import NameInput from 'components/NameInput';
import Favoriteplace from 'components/Favoriteplace';
import Time from 'components/Time';
import Comments from 'components/Comments';
import Slider from 'components/Slider';
import EndSurvey from 'components/EndSurvey';

import './index.css';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [favoriteplace, setFavoriteplace] = useState('');
  const [time, setTime] = useState('');
  const [comments, setComments] = useState('');
  const [slider, setSlider] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStepIncrease = () => {
    const increment = 100 / 5;
    setStep(step + 1);
    setProgress(progress + increment);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="survey">
      <h1>Please fill in this survey about your favorite place!</h1>
      {submitted ? (
        // eslint-disable-next-line max-len
        <EndSurvey name={name} favoriteplace={favoriteplace} time={time} comments={comments} slider={slider} />
      ) : (
        <div className="result-container">
          {step === 1 && (
            <NameInput name={name} setName={setName} />
          )}
          {step === 2 && (
            <Favoriteplace favoriteplace={favoriteplace} setFavoriteplace={setFavoriteplace} />
          )}
          {step === 3 && (
            <Time time={time} setTime={setTime} />
          )}
          {step === 4 && (
            <Comments comments={comments} setComments={setComments} />
          )}
          {step === 5 && (
            <Slider slider={slider} setSlider={setSlider} />
          )}
          {step < 6 && (
            <div className="survey-button">
              <button type="button" className="next-button" onClick={handleStepIncrease}>Next question</button>
            </div>
          )}
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}% ` }} />
            {progress}%
          </div>
          {step === 6 && (
            <form onSubmit={handleSubmit}>
              <p>Thank you!<br />Click submit for your summary.</p>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </div>
      )}
      <footer>
        * This survey was made by Ylva *<br />
      </footer>
    </div>
  );
}