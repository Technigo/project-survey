import React from 'react';

export const Result = ({ favorite, grape, food, group, taste }) => {
  return (
    <>
      <h3 className="resulttopic">SUMMERY:</h3>
      <h3 className="resulttext">My favorite wine is {favorite}</h3>
      <h3 className="resulttext">Yummyest grape is {grape}</h3>
      <h3 className="resulttext">I want to spend {group}</h3>
      <h3 className="resulttext">{food} is on my plate</h3>
      <h3 className="resulttext">My preferred scent is {taste}</h3>
      <button className="copy-send-button" type="submit" onClick={() => { navigator.clipboard.writeText('this'.state.textToCopy) }}>
        <a href="mailto:hello@winetwothree.com">COPY & SEND!</a>
      </button>
      playSound();
    </>
  );
};
