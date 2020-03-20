import React, { useState } from 'react';

import { Radio } from './components/Radio';
import { Select } from './components/Select';
import { Checkbox } from './components/Checkbox';

import { Summary } from './components/Summary';
import { NameQuestion } from './components/NameQuestion';
import "./styles.css";
import "./app.css";


export const App = () => {
  const [name, setName] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [rating, setRating] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  let [myChoice, setMyChoice] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="App">
      <h1 className={showSummary ? "welcome" : "goodbye"}>Welcome!</h1>

      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <NameQuestion name={name} setName={setName} />
          <Select rating={rating} setRating={setRating} />
          <Radio myChoice={myChoice} setMyChoice={setMyChoice} />
          <Checkbox newsLetter={newsLetter} setNewsLetter={setNewsLetter} />

          <button type="submit" disabled={name === "" ||
            rating === "" ||
            myChoice === false }>
            submit
          </button>
        </form>
      ) : (
          <Summary name={name} myChoice={myChoice} newsLetter={newsLetter} rating={rating} />
        )}
    </div>
  );
};
