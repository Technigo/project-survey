/* eslint-disable max-len */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Prefer } from './components/Prefer';
// import { Results } from './components/Results';
import { Color } from './components/Color';
import { Thing } from './components/Thing';
import { QuizResult } from './components/QuizResult'
import './index.css';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('')
  const [prefers, setPrefers] = useState('')
  const [color, setColor] = useState('')
  const [things, setThing] = useState('')
  const [results, setResults] = useState('')
  const [started, setStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleNextStep = () => {
    console.log('counter before', counter);
    setCounter(counter + 1);
    console.log('after', counter)
  };
  const handleStartQuiz = () => {
    setStarted(true);
    handleNextStep();
    if (counter >= 5) {
      setQuizEnded(true);
    }
  };

  return (
    <main className="StartPage">
      {!started && (
        <header>
          <h1>Answer these questions and we will tell you your favourite animal</h1>
          <button type="button" onClick={handleStartQuiz} className="startBtn" aria-label="press button to start the quiz">
            Start quiz
          </button>
        </header>
      )}

      {counter === 1 && (
        <div>
          <Name name={name} setName={setName} counterFromApp={counter} setCounter={setCounter} />

        </div>)}

      {counter === 2 && (
        <Prefer prefers={prefers} setPrefers={setPrefers} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter === 3 && (
        <Color color={color} setColor={setColor} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter === 4 && (
        <Thing thing={things} setThing={setThing} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter >= 5 && quizEnded && (
        <QuizResult name={name} color={color} prefers={prefers} thing={things} result={results} setResults={setResults} QuizResult={QuizResult} />
      )}

      {(counter === 1 && !name)
       || (counter === 2 && !prefers)
       || (counter === 3 && !color)
       || (counter === 4 && !things) ? (
          <p>Please answer the current question before proceeding.</p>
        ) : (
          started && counter < 5 && (
            <button type="button" onClick={handleNextStep} className="nextQuestion" aria-label="press next question button after inserting your name">
              Next question
            </button>
          )
        )}
    </main>
  );
}
// start button hur ska jag sätta button nr 2 vart?
// what should i put in result to show my results
// where should I put my if statement
// how do I make next question just show from name...
// what is exactly happening in line  30 & 55
/* {started && counter < 5 && (
        <button type="button" onClick={handleNextStep} className="nextQuestion">
          Next question
        </button> */
// why like this in nr 59 what does it mean?

