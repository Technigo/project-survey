import React from 'react';

const Fondness = ({ fondness, setFondness }) => {
  const handleFondnessChange = (event) => {
    setFondness(event.target.value);
  }
  return (
    <>
      <p>How much do you love these doggos?</p>
      <input type="text" value={fondness} onChange={handleFondnessChange} />
    </>
  );
}

export default Fondness;