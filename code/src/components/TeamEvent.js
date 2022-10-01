import React from 'react';

export const TeamEvent = ({ teamEvent, setTeamEvent }) => {
  const handleTeamEventChange = (event) => {
    setTeamEvent(event.target.value);
  }

  return (
    <form>
      <div>
        <h2><b>What is the next fun team event we should do?</b></h2>
        <select
          onChange={handleTeamEventChange}
          value={teamEvent}>
          <option value="">Select Event</option>
          <option value="bowling">Bowling</option>
          <option value="soccer">Soccer game</option>
          <option value="burgers">Burgers</option>
          <option value="party">Office Party</option>
        </select>
      </div>
    </form>
  )
};