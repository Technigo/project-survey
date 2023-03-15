import React, { useState } from 'react';
import { Name } from './components/Name';
import { Prefer } from './components/Prefer';
import { Results } from './components/Results';
import { Color } from './components/Color';
import { Thing } from './components/Thing';
import './index.css';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('')
  const [prefer, setPrefer] = useState('')
  const [color, setColor] = useState('')
  const [thing, setThing] = useState('')
  const [results, setResults] = useState('')
  const handleNextStep = () => {
    console.log('counter before', counter);
    setCounter(counter + 1);
    console.log('after', counter)
  }

  return (
    <div className="StartPage">
      {counter === 0 && (
        <>
          <h1>Answer these questions and we will tell you your favourite animal</h1>
          <button type="button" onClick={handleNextStep} className="startBtn"> Start </button>
        </>
      )}

      {counter === 1 && (
        <Name name={name} setName={setName} />
      )}
      {counter === 2 && (
        <Prefer prefer={prefer} setPrefer={setPrefer} />
      )}
      {counter === 3 && (
        <Color color={color} setColor={setColor} />
      )}
      {counter === 4 && (
        <Thing thing={thing} setThings={setThing} />
      )}
      {counter >= 5 && (
        <Results results={results} setResults={setResults} />

      )}
      {counter < 5 && (
        <>
          <p>tjudiluu</p>
          <button type="button" onClick={handleNextStep} className="nextQuestion"> Next question </button>
        </>
      )}

    </div>
  );
}
// start button hur ska jag sätta button nr 2 vart?
// what should i put in result to show my results
// where should I put my if statement

/* {counter < 5 && (
        <>
          <p>tjudiluu</p>
          <button type="button" onClick={handleNextStep}
          className="nextQuestion"> Next question </button>
        </>
      )} */