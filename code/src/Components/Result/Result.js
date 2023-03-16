/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Result.css';

/// ////////// FUNCTION //////////////// ///

export const Result = ({ favorite, grape, food, group, taste }) => {
  return (
    <>
      <h3 className="resulttopic">SUMMERY:</h3>
      <p className="resulttext" aria-label="Favorite wine">Favorite wine is {favorite}</p>
      <p className="resulttext" aria-label="Yummiest Grape">Yummyest grape is {grape}</p>
      <p className="resulttext" aria-label="Amount want to spend">I want to spend {group}</p>
      <p className="resulttext" aria-label="Whats on your plate">{food} is on my plate</p>
      <p className="resulttext" aria-label="My preferred scent is">My preferred scent is {taste}</p>
      <button className="copy-send-button" title="Copy wine preferences to clipboard and send via email" type="submit" onClick={() => navigator.clipboard.writeText(favorite, grape, group, food, taste)}>
        <a href="mailto:hello@winetwothree.com">COPY & SEND</a>
      </button>
      <button className="survey-again-button" title="Do the survey again button" type="submit" onClick={() => window.location.reload(false)}>
        BACK TO START
      </button>
    </>
  );
};
