import React from 'react'

export const LoneTeam = ({ loneTeam, setLoneTeam }) => {
  const handleLoneTeamChange = (event) => {
    setLoneTeam(event.target.value);
  };
  return (
    <fieldset className="lone-team-container">
      <h2 className="quest-heading">Which one of these fit best into what you are looking for?</h2>
      <label htmlFor="team">Team Player
        <input
          type="radio"
          id="team"
          name="team"
          value={loneTeam}
          onChange={handleLoneTeamChange} />
      </label>
      <label htmlFor="lone">Lone Wolf
        <input
          type="radio"
          id="lone"
          name="lone"
          value="Independent Worker"
          onChange={handleLoneTeamChange} />
      </label>
    </fieldset>
  );
};
