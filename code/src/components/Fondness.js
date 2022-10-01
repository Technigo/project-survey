import React from 'react';

const Fondness = ({ fondness, setFondness }) => {
  const handleFondnessChange = (event) => {
    setFondness(event.target.value);
  }

  let fondnessLevel = 'I like em'
  if (fondness > 3) {
    fondnessLevel = 'I like em a bunch'
  }
  if (fondness > 5) {
    fondnessLevel = 'I like em a lot'
  }
  if (fondness > 7) {
    fondnessLevel = 'I like em very much'
  }
  if (fondness > 8) {
    fondnessLevel = 'I love them'
  }
  if (fondness > 9) {
    fondnessLevel = 'I LOVE them'
  }

  return (
    <label htmlFor="Fondness">
      <p>How much do you love these fluffy little long bois?</p>
      <p style={{ fontSize: (10 + fondness) }}>
        {fondnessLevel}
      </p>
      <input id="Fondness" type="range" min="1" max="10" step={1} value={fondness} onChange={handleFondnessChange} />
    </label>
  );
}

export default Fondness;