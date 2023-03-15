import React from 'react';

export const Result = ({ name, grape, food, group, taste }) => {
  return (
    <>
      <h1 className="nametext">Summery:</h1>
      <h1 className="resulttext">My favorite wine is {name}</h1>
      <h1 className="resulttext">My favorite grape is {grape}</h1>
      <h1 className="resulttext">I want to spend {group}€</h1>
      <h1 className="resulttext">I will eat {food} to this wine</h1>
      <h1 className="resulttext">My favorite tones {taste}</h1>
      <button className="copy-send-button" type="submit" onClick={() => { navigator.clipboard.writeText('this'.state.textToCopy) }}><a href="mailto:hello@winetwothree.com">Copy & Send!</a>
      </button>
    </>
  );
};
