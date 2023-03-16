/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './components/Header';
import Name from './components/Name';
import Love from './components/Love';
import Favorite from './components/Favorite';
import Result from './components/Result';

export const App = () => {
  const [question, setQuestion] = useState(1);
  const [name, setName] = useState('');
  const [love, setLove] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleQuestionIncrease = () => {
    setQuestion(question + 1);
  }

  const handleRestartSurvey = () => {
    setQuestion(1);
    setName('');
    setLove('');
    setFavorite('');
  }

  const handleSubmitSurvey = () => {
    setQuestion(4);
  }

  return (
    <>
      <Header />
      {question < 4 && (
        <div>Question number: {question}/3</div>
      )}
      {question === 1 && (
        <Name name={name} setName={setName} />
      )}
      {question === 2 && (
        <Love love={love} setLove={setLove} />
      )}
      {question === 3 && (
        <Favorite favorite={favorite} setFavorite={setFavorite} handleSubmitSurvey={handleSubmitSurvey} />
      )}
      {question === 4 && (
        <Result name={name} love={love} favorite={favorite} handleRestartSurvey={handleRestartSurvey} />
      )}

      {question > 1 && question < 4 && (
        <button type="button" onClick={() => setQuestion(question - 1)}>Prev. question</button>
      )}

      {question === 3 && (
        <button type="button" onClick={handleSubmitSurvey}>Submit</button>
      )}

      {question < 3 && (
        <button type="button" onClick={handleQuestionIncrease}>Next question</button>
      )}
    </>
  );
}

// There should be a submit button. When pressed your app
// should hide the input form and show a summary of the user's submissions.

