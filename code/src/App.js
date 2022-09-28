import React, { useState } from 'react';
import QuestionText from 'Components/QuestionText.js';
import QuestionRadio from 'Components/QuestionRadio.js';
import Header from './Components/Header.js';
import QuestionDropdownGenre from './Components/QuestionDropdownGenre';
import QuestionDropdownNumber from './Components/QuestionDropdownNumber';

export const App = () => {
  const [genre, setGenre] = useState('')
  const [number, setNumber] = useState('')
  const [recommendation, setRecommendation] = useState('')
  const [radio, setRadio] = useState('')

  return (
    <>
      <Header />
      <section className="survey-container">
        <QuestionRadio radio={radio} setRadio={setRadio} />
        <QuestionDropdownGenre genre={genre} setGenre={setGenre} />
        <QuestionDropdownNumber number={number} setNumber={setNumber} />
        <QuestionText recommendation={recommendation} setRecommendation={setRecommendation} />
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </section>
    </>
  );
}