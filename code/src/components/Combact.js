import React from 'react';

export const Combact = ({ combact, setCombact }) => {
  return (
    <form>
      <h1> Which do you think is the most effective form of combat? </h1>
      <label htmlFor="asia">
        <input type="radio" id="asia" value={combact} onChange={(event) => setCombact(event.target.value)} checked />
      </label>
    </form>
  );
}
