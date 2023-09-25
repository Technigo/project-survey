import React from 'react';

export const Result = ({ name, sign, select }) => {
  return (
    <div className="result">
      <p>Okey {name}!</p>
      <p>Your zodiac sign is {sign}</p>
      <p> You are the {select} type of {sign}! </p>
      <p> More {sign}´s to the people!!! </p>
    </div>
  );
}

