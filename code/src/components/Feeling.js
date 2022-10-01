import React from 'react';

export const Feeling = ({ feeling, setFeeling }) => {
  return (
    <div className="survey-item feeling">
      <label className="section-heading">How does coffe make you feel?</label>
      <p>
        ( awsom, alert, can´t sleep, need a bathroom, cant live without it ){' '}
      </p>
      <input
        id="feeling"
        type="text"
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)}
      />
    </div>
  );
};
