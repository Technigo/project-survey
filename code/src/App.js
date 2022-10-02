import React, { useState } from 'react';
import Startpage from 'components/Startpage';
import Types from 'components/Types';
import Summary from 'components/Summary';
import './index.css';

const questionsData = [
  {
    id: '0'
  },
  {
    id: '1',
    questionTitle: "Nice, let's do this!",
    questionText: "First of all, what's your name?",
    inputType: 'text'
  },
  {
    id: '2',
    questionTitle: 'ENERGY LEVEL',
    questionText: 'Energywise, how much energy do you need?',
    inputType: 'select',
    options: [
      { value: 'A lot' },
      { value: 'Just enough to keep me going' },
      { value: 'Low key, something slow' }
    ]
  },
  {
    id: '3',
    questionTitle: 'GENRE',
    questionText: 'What type of music do you prefer?',
    inputType: 'radio',
    options: [
      { value: 'Pop/Rock', label: 'Pop/Rock' },
      { value: 'Hiphop', label: 'Hiphop' },
      { value: 'World', label: 'World' }
    ]
  },
  {
    id: '4',
    questionTitle: 'EPOKE',
    questionText: 'Do you prefer contemporary music or are oldies?',
    inputType: 'radio',
    options: [
      { value: 'Contemporary', label: 'Contemporary' },
      { value: 'Oldies', label: 'Oldies' }
    ]
  }
];

export const App = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [answers, setAnswers] = useState([]);

  /// //Keep track of which question is next////
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentQuestionNumber = currentQuestion + 1;
    setcurrentQuestion(currentQuestionNumber);

    /// //Save answers////

    const updateAnswer = (updatedAnswer) => {
      // eslint-disable-next-line no-shadow
      setAnswers((answers) => [...answers, ...updatedAnswer]);
    };

    const currentAnswer = {};
    currentAnswer[currentQuestionNumber] = userInput;
    // eslint-disable-next-line no-use-before-define
    updateAnswer([currentQuestionNumber, userInput]);
    setUserInput('');
  };

  /// //Keep track of when user interact////
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  /// //Reset the form////
  const resetForm = () => {
    setcurrentQuestion(0);
    setAnswers([]);
    window.location.reload(false);
  };

  return (
    <form className="main" onSubmit={(e) => handleFormSubmit(e)}>
      {currentQuestion === 0 && (
        <section className="container">
          <Startpage />
          <div className="btn">
            <button type="submit">Let&apos;s do it!</button>
          </div>
        </section>
      )}
      {currentQuestion > 0 && currentQuestion < 5 && (
        <section className="container">
          <Types
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...questionsData[currentQuestion]}
            onChange={handleUserInputChange}
            userInput={userInput} />

          <div className="btn">
            <button type="submit">Next question</button>
          </div>
        </section>
      )}
      {currentQuestion === 5 && (
        <section className="container">
          <Summary
            answers={answers}
            setAnswers={setAnswers}
            reset={resetForm} />
        </section>
      )}
    </form>
  );
};
