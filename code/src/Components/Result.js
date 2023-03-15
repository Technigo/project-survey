import React from 'react';

export const Result = ({ name, food, drink, group, taste }) => {
  return (
    <>
      <h1 className="resulttext">My favorite wine is {name}</h1>
      <h1 className="resulttext">My favorite grape is {food} 🍇</h1>
      <h1 className="resulttext">I want to spend {group} 💸</h1>
      <h1 className="resulttext">I will eat {drink} to this wine 🍲</h1>
      <h1 className="resulttext">My favorite tones {taste}</h1>
    </>

  );
};
