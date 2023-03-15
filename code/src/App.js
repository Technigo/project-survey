/* eslint-disable max-len */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Prefer } from './components/Prefer';
import { Results } from './components/Results';
import { Color } from './components/Color';
import { Thing } from './components/Thing';
// import { handleQuizResult } from './components/quiz'
import './index.css';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('')
  const [prefers, setPrefers] = useState('')
  const [color, setColor] = useState('')
  const [things, setThing] = useState('')
  const [results] = useState('')
  const [started, setStarted] = useState(false);

  const calculateResult = ({ prefer, thing, colors }) => {
    let result;
    if (prefer === 'surf' && thing === 'ocean' && colors === 'black') {
      result = 'shark';
    } else if ((prefer === 'surf' && thing === 'sand' && colors === 'black')
      || (prefer === 'surf' && thing === 'mountain' && colors === 'black')) {
      result = 'dog+surf';
    } else if (prefer === 'surf' && thing === 'city' && colors === 'black') {
      result = 'seagull';
    } else if (colors === 'green' && prefer === 'surf' && thing === 'ocean') {
      result = 'turtle';
    } else if (colors === 'green' && prefer === 'surf' && thing === 'sand') {
      result = 'turtle';
    } else if (colors === 'green' && prefer === 'surf' && thing === 'mountain') {
      result = 'parrot';
    } else if (colors === 'green' && prefer === 'surf' && thing === 'city') {
      result = 'turtle on a walk';
    } else if (colors === 'pink' && prefer === 'surf' && thing === 'ocean') {
      result = 'jellyFish';
    } else if (colors === 'pink' && prefer === 'surf' && thing === 'sand') {
      result = 'Pink sand crabs';
    } else if (colors === 'pink' && prefer === 'surf' && thing === 'mountain') {
      result = 'jelly fish';
    } else if (colors === 'brown' && prefer === 'surf' && thing === 'city') {
      result = 'jelly fish';
    } else if (colors === 'brown' && prefer === 'surf' && thing === 'ocean') {
      result = 'dog +picture of dog that surfs';
    } else if (colors === 'brown' && prefer === 'surf' && thing === 'sand') {
      result = 'Dog';
    } else {
      result = 'unknown';
    }

    return result;
  }

  const handleNextStep = () => {
    console.log('counter before', counter);
    setCounter(counter + 1);
    console.log('after', counter)
    if (counter === 4) {
      const result = calculateResult({ prefer: prefers, thing: things, colors: color });
      setResults(result);
    }
  }
  const handleStartQuiz = () => {
    setStarted(true);
    handleNextStep();
  };

  return (
    <div className="StartPage">
      {!started && (
        <>
          <h1>Answer these questions and we will tell you your favourite animal</h1>
          <button type="button" onClick={handleStartQuiz} className="startBtn">
            Start
          </button>
        </>
      )}

      {counter === 1 && (
        <div>
          <Name name={name} setName={setName} counterFromApp={counter} setCounter={setCounter} />

        </div>)}

      {counter === 2 && (
        <Prefer prefer={prefers} setPrefer={setPrefers} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter === 3 && (
        <Color color={color} setColor={setColor} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter === 4 && (
        <Thing thing={things} setThing={setThing} counterFromApp={counter} setCounter={setCounter} />
      )}
      {counter >= 5 && (
        <Results name={name} color={color} prefer={prefers} thing={things} result={results} />)}

      {(counter === 1 && !name)
       || (counter === 2 && !prefers)
       || (counter === 3 && !color)
       || (counter === 4 && !things) ? (
          <p>Please answer the current question before proceeding.</p>
        ) : (
          started && counter < 5 && (
            <button type="button" onClick={handleNextStep} className="nextQuestion">
              Next question
            </button>
          )
        )}
    </div>
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

