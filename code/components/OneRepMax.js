import React from 'react';

export const OneRepMax = ({ kilo, reps }) => {
  const resultEpley = (kilo * (1 + reps / 30));
  const resultBrzycki = (kilo * (36 / (37 - reps)));
  const resultBaechle = (kilo * (1 + 0.033 * reps));
  const result = (resultEpley + resultBrzycki + resultBaechle) / 3;
  return Math.round(result);
};

export const Result = ({ name, kilo, reps }) => {
  const oneRepMax = OneRepMax({ kilo, reps });
  return (
    <>
      <p> OK, here we go {name} </p>
      <p> You have already lifted {reps} with {kilo} in the benchpress. </p>
      <p> As you consider yourself beginner, your 1 rep max is around {oneRepMax} </p>
    </>
  );
};