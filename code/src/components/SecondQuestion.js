import React from 'react';

const SecondQuestion = ({ bandChoice, onBandChoiceChange, onStepChange, arenaChoice, tickets }) => {
  return (
    <form>
      <label htmlFor="band-select"><h1>These bands are available in your chosen venue: {arenaChoice}</h1></label>
      <select id="band-select" className="band-choice" value={bandChoice} onChange={onBandChoiceChange}>
        <option value="">Select a band</option>
        <option value="Rammstein">Rammstein</option>
        <option value="Håkan Hellström">Håkan Hellström</option>
        <option value="Coldplay">Coldplay</option>
        <option value="Depeche Mode">Depeche Mode</option>
      </select>
      
      <h2>This is what you picked this far:</h2>
      <p>Venue choice: {arenaChoice}</p>
      <p>You chose to get: {tickets} tickets</p>
      
      <button className="button" onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default SecondQuestion;
