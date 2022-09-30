import React from 'react'

export const LoneTeam = ({ loneTeam, setLoneTeam }) => {
  console.log(loneTeam)
  return (
    <div className="question-container">
      <h2 className="question-heading">Which one of these fit <span className="underline">best</span> into what you are looking for?</h2>
      <div className="radio-container">
        <label className="radio-label" htmlFor="lone">
          <input
            className="radio-btn"
            type="radio"
            id="lone"
            name="loneTeam"
            value="lone wolf"
            onChange={(e) => setLoneTeam(e.target.value)}
            checked={loneTeam === 'lone wolf'} />
        Lone Wolf
        </label>
        <label className="radio-label" htmlFor="team">
          <input
            type="radio"
            id="team"
            name="loneTeam"
            value="team player"
            onChange={(e) => setLoneTeam(e.target.value)}
            checked={loneTeam === 'team player'} />
        Team Player
        </label>
      </div>
    </div>
  );
};