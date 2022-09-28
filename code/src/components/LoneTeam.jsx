import React from 'react'

export const LoneTeam = ({ loneTeam, setLoneTeam }) => {
  return (
    <div className="lone-team-container">
      <h2 className="quest-heading">Which one of these fit best into what you are looking for?</h2>
      <label htmlFor="team">Team Player
        <input
          type="radio"
          id="team"
          name="loneteam"
          value="Team Player"
          onChange={(e) => setLoneTeam(e.target.value)}
          checked={loneTeam === 'Team Player'} />
      </label>
      <label htmlFor="indie">Independent Worker
        <input
          type="radio"
          id="indie"
          name="loneteam"
          value="Independent Worker"
          onChange={(e) => setLoneTeam(e.target.value)}
          checked={loneTeam === 'Independent Worker'} />
      </label>
    </div>
  );
};
