/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './components/Header';
import Name from './components/Name';
import Love from './components/Love';
import Favorite from './components/Favorite';
import Result from './components/Result';
import './app.css'

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
      <Header />
      {question === 0 && (
        <div>
          <h2>Question number: 0/3</h2>
          <button type="button" onClick={handleQuestionIncrease}>Start survey</button>
        </div>
      )}
      {question > 0 && question < 4 && (
        <div><h2>Question number: {question}/3</h2></div>
      )}
      {question === 1 && (
        <div className="form-container">
          <form>
            <Name name={name} setName={setName} />
            <button type="button" onClick={handleQuestionIncrease}>Next question</button>
          </form>
        </div>
      )}
      {question === 2 && (
        <div className="form-container">
          <form>
            <Love love={love} setLove={setLove} />
            <div className="btn-container">
              <button type="button" onClick={() => setQuestion(question - 1)}>Prev. question</button>
              <button type="button" onClick={handleQuestionIncrease}>Next question</button>
            </div>
          </form>
        </div>
      )}
      {question === 3 && (
        <div className="form-container">
          <form>
            <Favorite favorite={favorite} setFavorite={setFavorite} handleSubmitSurvey={handleSubmitSurvey} />
            <div className="btn-container">
              <button type="button" onClick={() => setQuestion(question - 1)}>Prev. question</button>
              <button type="button" onClick={handleSubmitSurvey}>Submit</button>
            </div>
          </form>
        </div>
      )}
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

// There should be a submit button. When pressed your app
// should hide the input form and show a summary of the user's submissions.

