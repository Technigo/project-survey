import React from 'react';

const Fondness = ({ fondness, setFondness }) => {
  const handleFondnessChange = (event) => {
    setFondness(event.target.value);
  }

  let fondnessLevel = 'Not at all 🫣'
  if (fondness > 0) {
    fondnessLevel = 'Not at all 🫣'
  }
  if (fondness > 1) {
    fondnessLevel = 'I do not hate them 😬'
  }
  if (fondness > 2) {
    fondnessLevel = 'A little bit 😶'
  }
  if (fondness > 3) {
    fondnessLevel = 'They are okay 🙂'
  }
  if (fondness > 4) {
    fondnessLevel = 'I like them 😊'
  }
  if (fondness > 5) {
    fondnessLevel = 'I like them a lot 😀'
  }
  if (fondness > 6) {
    fondnessLevel = 'I like them very much 🤩'
  }
  if (fondness > 7) {
    fondnessLevel = 'I love them 😍'
  }
  if (fondness > 8) {
    fondnessLevel = 'I LOVE THEM 🥰'
  }
  if (fondness > 9) {
    fondnessLevel = 'I LOVE THEM 💖💖💖'
  }

  return (
    <label htmlFor="Fondness">
      <p>On a scale, how much do you love these fluffy little long bois?</p>
      <input id="Fondness" type="range" min="1" max="10" step={1} value={fondness} onChange={handleFondnessChange} />
      <span>
        {fondness} / 10{' '}
        {fondnessLevel}
      </span>
    </label>
  );
}

export default Fondness;