import React from 'react';

const TeamEvent = ({ teamEvent, setTeamEvent }) => {
  const handleTeamEventChange = (event) => {
    setTeamEvent(event.target.value);
  }

  return (
    <form>
      <div>
        <p>What is the next fun team event we should do?</p>
        <select
          onChange={handleTeamEventChange}
          value={teamEvent}>
          <option value="">Select drink</option>
          <option value="bowling">Bowling</option>
          <option value="soccer">Soccer game</option>
          <option value="burgers">Burgers</option>
          <option value="party">Office Party</option>
        </select>
      </div>
    </form>
  )
};