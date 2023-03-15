import React from 'react';

export const Result = ({ favorite, grape, food, group, taste }) => {
  return (
    <>
      <h3 className="resulttopic">SUMMERY:</h3>
      <h3 className="resulttext">MY FAVORITE PRODUCER IS {favorite}</h3>
      <h3 className="resulttext">YUMMIEST GRAPE IS {grape}</h3>
      <h3 className="resulttext">I WANT TO SPEND {group}€</h3>
      <h3 className="resulttext">{food} IS ON MY PLATE</h3>
      <h3 className="resulttext">MY PREFERRED SCENT IS {taste}</h3>
      <button className="copy-send-button" type="submit" onClick={() => { navigator.clipboard.writeText('this'.state.textToCopy) }}><a href="mailto:hello@winetwothree.com">COPY & SEND!</a>
      </button>
    </>
  );
};
