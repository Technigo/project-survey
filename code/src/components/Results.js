import React from 'react'

export const Results = ({ name, color, prefer, things }) => {
  const animal = Results({ prefer, things, color });
  return (
    <div>
      <section className="inputName">
        <h2>{name}, your favourite animal is {animal}</h2>
      </section>
    </div>
  );
};