import React from 'react';

export const Feeling = ({ feeling, setFeeling }) => {
  return (
    <div className="survey-item feeling">
      <label className="section-heading" htmlFor="feeling">
        How does Coffee make you feel?
        <p>
          (ex: awesome, a million bucks, you can´t sleep, need a bathroom, can´t live without it!)
        </p>
        <input
          id="feeling"
          type="text"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)} />
      </label>
    </div>
  );
};
