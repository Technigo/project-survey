import React from 'react'
import { getResult } from './QuizResult'

export const Results = ({ name, color, prefer, things }) => {
  const results = getResult({ prefer, things, color });
  return (
    <div>
      <section className="inputName">
        <h2>{name}, your favourite animal is {results}</h2>
      </section>
    </div>
  );
};