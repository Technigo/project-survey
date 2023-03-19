/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Quest = ({ quest, onQuestChange }) => {
  return (
    <div className="quest-dropdown" type="dropdown">
      <h2>Choose your quest!</h2>
      <select value={quest} onChange={onQuestChange}>
        <option disabled value="">
          Choose a quest
        </option>
        <option>Quest for the Lost City</option>
        <option>Journey to the Enchanted Forest</option>
        <option>Expedition to the Dark Island</option>
        <option>Adventure in the Forbidden Valley</option>
        <option>Search for the Ancient Temple</option>
        <option>Mission to the Crystal Caverns</option>
        <option>Expedition to the Starry Mountains</option>
      </select>
    </div>
  );
};

export default Quest;
