/* eslint-disable */
import React, { useState } from 'react';
import QuestionText from 'Components/QuestionText.js';
import QuestionRadio from 'Components/QuestionRadio.js';
import Summary from 'Components/Summary.js';
import Footer from 'Components/Footer.js';
import Header from './Components/Header.js';
import QuestionDropdownGenre from './Components/QuestionDropdownGenre';
import QuestionDropdownNumber from './Components/QuestionDropdownNumber';

export const App = () => {
  const [genre, setGenre] = useState('')
  const [number, setNumber] = useState('')
  const [recommendation, setRecommendation] = useState('')
  const [radio, setRadio] = useState('')
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = ((event) => {
    event.preventDefault()
    setShowSummary(true)
    setShowForm(false)
  })

  const surveyAnswered = () => {
    if (radio === '') {
      return true
    }
    if (genre === '') {
      return true
    }
    if (number === '') {
      return true
    }
    if (recommendation === '') {
      return true
    }
    return false
  }

  return (
    <>
      <Header />
      <div>
        {showForm &&
          <form className="survey-container" onSubmit={handleSubmit}>
            <QuestionRadio radio={radio} setRadio={setRadio} />
            <QuestionDropdownGenre genre={genre} setGenre={setGenre} />
            <QuestionDropdownNumber number={number} setNumber={setNumber} />
            <QuestionText recommendation={recommendation} setRecommendation={setRecommendation} />
            <div className="submitBtn-container">
              <button className="submitBtn" disabled={surveyAnswered()} type="submit">Submit</button>
            </div>
          </form>
        }

        {showSummary &&
          <Summary
            radio={radio}
            genre={genre}
            number={number}
            recommendation={recommendation} />
        }
      </div>
      <Footer />
    </>
  );
}