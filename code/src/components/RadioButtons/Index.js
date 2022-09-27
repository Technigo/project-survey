import React, { useState } from 'react';

const testGroups = ['Bow and Arrow', 'an axe ofc!', 'Magic'];

const RadioButtons = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <form>
      {testGroups.map((test) => (
        <label key={test} htmlFor="test">
          <input
            id="test"
            name="test"
            type="radio"
            value={test}
            onChange={(event) => setSelectedRadio(event.target.value)}
            checked={selectedRadio === test}
          />
          {test}
        </label>
      ))}
    </form>
  );
};

export default RadioButtons;
