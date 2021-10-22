import React from 'react';
import './overview.css';

const Overview = ({
  nameInput,
  team,
  doneInput,
  willDoInput,
  blockers,
  blockersDescription,
}) => {
  return (
    <section className="summary">
      <h2>My values from form: </h2>
      <p>Name: {nameInput}</p>
      <p>Team: {team}</p>
      <p>Done: {doneInput}</p>
      <p>Plan to do: {willDoInput}</p>
      <p>
        I{' '}
        {blockers === 'yes' ? 'do have blockers.' : 'do not have any blockers.'}
      </p>
      <p>{blockersDescription}</p>
      <button type="submit">Send to Slack</button>
    </section>
  );
};

export default Overview;

// style={{ color: flavor === 'salty' ? 'red' : 'blue' }}

{
  /* <p>
You are feeling {happiness === 'happy' ? 'super happy ' : 'a bit sad '}
today
</p> */
}
