import React, { useState } from 'react';

const seasonInputs = ["yes", "no"]

const PickSeason = () => {

  const [seasonInput, setSeasonInput] = useState();

  return (
    <form>
      <h3>Do you eat ice cream all year?</h3>
      {seasonInputs.map(response => (
        <label key={response}>
          <input
            type="checkbox"
            value={response}
            onChange={(event) => setSeasonInput(event.target.value)}
            checked={seasonInput === response}
          />
          {response}
        </label>
      ))}
    </form>
  );

};

export default PickSeason