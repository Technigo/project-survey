/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './components/Header';
import Name from './components/Name';
import Love from './components/Love';
import Favorite from './components/Favorite';
import Result from './components/Result';
import './app.css'
import slowMotionAudio from './audio/slowmotion.mp3';

export const App = () => {
  const [question, setQuestion] = useState(0); // Start with question 0
  const [name, setName] = useState('');
  const [love, setLove] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleQuestionIncrease = () => {
    setQuestion(question + 1);
  }

  const handleRestartSurvey = () => {
    setQuestion(0); // Go back to question 0
    setName('');
    setLove('');
    setFavorite('');
  }

  const handleSubmitSurvey = () => {
    setQuestion(4);
  }

  return (
    <div>
      <Header questionNumber={question} />
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <div className="audio">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption, jsx-a11y/media-has-caption */}
        <audio controls title="Instrumental music Slowmotion from Bensound.com">
          <source src={slowMotionAudio} type="audio/mp3" />
        </audio>
      </div>
      {question === 0 && (
        <div>
          <button type="button" onClick={handleQuestionIncrease}>Start survey</button>
        </div>
      )}
      {/* If the current question is 1, render the Name component */}
      {question === 1 && (
        <div className="form-container">
          <form>
            <Name name={name} setName={setName} />
            <button type="button" onClick={handleQuestionIncrease}>Next</button>
          </form>
        </div>
      )}
      {/* If the current question is 1, render the Name component */}
      {question === 2 && (
        <div className="form-container">
          <form>
            <Love love={love} setLove={setLove} />
            <div className="btn-container">
              <button type="button" onClick={() => setQuestion(question - 1)}>Go back</button>
              <button type="button" onClick={handleQuestionIncrease}>Next</button>
            </div>
          </form>
        </div>
      )}
      {/* If the current question is 3, render the Favorite component */}
      {question === 3 && (
        <div className="form-container">
          <form>
            <Favorite favorite={favorite} setFavorite={setFavorite} handleSubmitSurvey={handleSubmitSurvey} />
            <div className="btn-container">
              <button type="button" onClick={() => setQuestion(question - 1)}>Go back</button>
              <button type="button" onClick={handleSubmitSurvey}>Submit</button>
            </div>
          </form>
        </div>
      )}
      {/* If the current question is 4, render the Result component */}
      {question === 4 && (
        <div className="form-container">
          <form>
            <Result name={name} love={love} favorite={favorite} handleRestartSurvey={handleRestartSurvey} />
          </form>
        </div>
      )}
    </div>
  );
}