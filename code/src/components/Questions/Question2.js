import React, { useState } from 'react';

const lactoseInputs = ["yes", "no"]

const PickLactose = () => {

  const [lactoseInput, setLactoseInput] = useState();

  return (
    <form className="QCard">
      <h3>Are you lactose intolerant?</h3>
      {lactoseInputs.map(response => (
        <label key={response}>
          <input
            type="checkbox"
            value={response}
            onChange={(event) => setLactoseInput(event.target.value)}
            checked={lactoseInput === response}
          />
          {response}
        </label>
      ))}
    </form>
  );

};

export default PickLactose

