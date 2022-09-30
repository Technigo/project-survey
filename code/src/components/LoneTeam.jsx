import React from 'react'

export const LoneTeam = ({ loneTeam, setLoneTeam }) => {
  console.log(loneTeam)
  return (
    <div className="lone-team-container">
      <h2 className="quest-heading">Which one of these fit <span className="underline">best</span> into what you are looking for?</h2>
      <label htmlFor="lone">
        <input
          className="radio-btn"
          type="radio"
          id="lone"
          name="loneTeam"
          value="lone"
          onChange={(e) => setLoneTeam(e.target.value)}
          checked={loneTeam === 'lone'} />
        Lone Wolf
      </label>
      <label htmlFor="team">
        <input
          type="radio"
          id="team"
          name="loneTeam"
          value="team"
          onChange={(e) => setLoneTeam(e.target.value)}
          checked={loneTeam === 'team'} />
        Team Player
      </label>
    </div>
  );
};