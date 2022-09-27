import React, { useState } from 'react';
import QuestionText from 'Components/QuestionText.js';
import Header from './Components/Header.js';
import QuestionDropdownGenre from './Components/QuestionDropdownGenre'
import QuestionDropdownNumber from './Components/QuestionDropdownNumber'

export const App = () => {
  const [genre, setGenre] = useState('')
  const [number, setNumber] = useState('')
  const [recommendation, setRecommendation] = useState('')

  return (
    <>
      <Header />
      <section className="survey-container">
        <QuestionDropdownGenre genre={genre} setGenre={setGenre} />
        <QuestionDropdownNumber number={number} setNumber={setNumber} />
        <QuestionText recommendation={recommendation} setRecommendation={setRecommendation} />
      </section>
    </>
  );
}