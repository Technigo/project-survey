import React from 'react';

export const Team = ({
  team,
  setTeam,
  handleStepDecrease,
  handleStepIncrease
}) => {
  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  }
  return (
    <div className="questionWrapper">
      <label htmlFor="team" className="teamQuestion">Which team do you work in?
        <div className="inputWrapper">
          <input type="text" id="team" className="team" value={team} onChange={handleTeamChange} />
        </div>
      </label>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease} aria-label="Go back">Back</button>
        <button type="button" className="buttonNext" onClick={handleStepIncrease} aria-label="Go to next question">Next</button>
      </div>
    </div>
  );
};