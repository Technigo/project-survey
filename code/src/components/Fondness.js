import React from 'react';

const Fondness = ({ fondness, setFondness }) => {
  const handleFondnessChange = (event) => {
    setFondness(event.target.value);
  }
  return (
    <label htmlFor="Fondness">
      <p>How much do you love these fluffy little long bois?</p>
      <input id="Fondness" type="range" min="9" max="10" value={fondness} onChange={handleFondnessChange} />
    </label>
  );
}

export default Fondness;