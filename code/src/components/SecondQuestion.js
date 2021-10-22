import React from'react';

//This component contains a drop-down
const SecondQuestion = ({ seasonInput, onSeasonInputChange, onStepChange }) => {
  return (
    <form className="section">
      <h2>What is your favorite season<span role="img" aria-label="smile">🌍</span></h2>
        <select 
          onChange={onSeasonInputChange}
          value={seasonInput}
          >
            <option value="Couldn't decide">Select a season</option>
            <option value="Spring">Spring, everything awakens!</option>
            <option value="Summer">Summer, sunny days!</option>
            <option value="Autumn">Autumn, the colors are magnificent!</option>
            <option value="Winter">Winter, snow is awesome!</option>
        </select>
        <button onClick={onStepChange}>Click here to continue</button>      
    </form>
  );
};

export default SecondQuestion;