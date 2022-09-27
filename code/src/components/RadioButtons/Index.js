import React, { useState } from 'react';

const testGroups = ['Test1', 'Test2', 'Test3', ' Test4'];

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
