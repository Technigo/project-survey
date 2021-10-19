import React, { useState} from'react';

const SecondQuestion = ({ onStepChange }) => {
  return (
    <form>
      <h2>What is your favorite season?</h2>
        <select
          onChange={event => setSeason(event.target.value)}
          value={season}
          >
            <option value="">Select a season</option>
            <option value="Spring">Spring, everything awakens!</option>
            <option value="Summer">Summer, sunny days!</option>
            <option value="Autumn">Autumn, the colors are magnificent!</option>
            <option value="Winter">Winter, snow is awesome!</option>
        </select>
        <button onClick={onStepChange}>Click here to continue</button>      
      </form>
    )};

export default SecondQuestion;