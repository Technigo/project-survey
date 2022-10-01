/* eslint max-len: ["error", { "code": 180 }] */

import React from 'react';

const CoolestThing = ({ coolestThing, setCoolestThing }) => {
  const handleCoolestThing = (event) => {
    setCoolestThing(event.target.value);
  }
  return (
    <label htmlFor="coolestThing">
      <p>What is the coolest thing about Borzois?</p>
      <select className="select" id="coolestThing" value={coolestThing} onChange={handleCoolestThing}>
        <option>How cute and fluffy they are</option>
        <option>How fast they can run</option>
        <option>How smart they are</option>
      </select>
    </label>
  );
}

export default CoolestThing;