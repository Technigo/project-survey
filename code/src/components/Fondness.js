import React from 'react';

const Fondness = ({ fondness, setFondness }) => {
  const handleFondnessChange = (event) => {
    setFondness(event.target.value);
  }
  return (
    <label htmlFor="Fondness">
      <p>How much do you love these doggos?</p>
      <input id="Fondness" type="text" value={fondness} onChange={handleFondnessChange} />
    </label>
  );
}

export default Fondness;