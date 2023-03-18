import React from 'react';

export const Combact = ({ combact, setCombact }) => {
  return (
    <form>
      <h1> Which do you think is the most effective form of combat? </h1>
      <label>
        <input
          type="radio"
          id="Judo"
          value="Judo"
          onChange={(event) => setCombact(event.target.value)}
          checked={combact === 'Judo'}
        />
        Judo
      </label>
      <label>
        <input
          type="radio"
          id="Kung-Fu"
          value="Kung-Fu"
          onChange={(event) => setCombact(event.target.value)}
          checked={combact === 'Kung-Fu'}
        />
        Kung-Fu
      </label>
    </form>
  );
}
