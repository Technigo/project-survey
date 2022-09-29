/* eslint max-len: ["error", { "code": 180 }] */

import React from 'react';

const CoolestThing = ({ coolestThing, setCoolestThing }) => {
  const handleCoolestThing = (event) => {
    setCoolestThing(event.target.value);
  }
  return (
    <>
      <p>What is the coolest thing about Borzois?</p>
      <select>
        <option disabled value="">Select an option:</option>
        <option value={coolestThing} onChange={handleCoolestThing}>How fast they can run</option>
        <option value={coolestThing} onChange={handleCoolestThing}>How smart they are</option>
        <option value={coolestThing} onChange={handleCoolestThing}>How cute and fluffy they are</option>
      </select>
    </>
  );
}

export default CoolestThing;