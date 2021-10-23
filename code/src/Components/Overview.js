import React from 'react';
import './overview.css';

const Overview = ({
  nameInput,
  team,
  doneInput,
  willDoInput,
  blockers,
  blockersDescription,
  onRestartChange,
}) => {
  return (
    <section className="summary">
      <h2>{nameInput}'s details:</h2>
      <p>Team: {team}</p>
      <p>
        Done: <span className="italic">{doneInput}</span>
      </p>
      <p>
        Plan to do: <span className="italic"> {willDoInput}</span>
      </p>
      <p>
        I{' '}
        {blockers === 'yes' ? 'do have blockers.' : 'do not have any blockers.'}
      </p>
      <p>
        <span className="italic">{blockersDescription}</span>
      </p>
      <button className="button bouncy" onClick={onRestartChange}>
        Send to Slack
      </button>
    </section>
  );
};

export default Overview;
