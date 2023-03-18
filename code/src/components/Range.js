import React from 'react';

export const ratingText = [
  '1 - Im a coward 🐭',
  '2 - Im not in the best shape 🍕',
  '3 - I feel good! 🤡',
  '4 - Im confident! 💪🏼',
  '5 - Bring it on! 🦅'
];

const Range = ({ volume, onVolumeChange }) => {
  return (
    <div className="volume-section">
      <h2>What difficulty level do you choose for this quest?</h2>
      <form onSubmit={onVolumeChange}>
        <label className="like-volume" htmlFor="vol">
          {' '}
        </label>
        <input type="range" min="0" max="4" value={volume} onChange={onVolumeChange} />
        <br />
        <output className="output" htmlFor="range">
          {ratingText[volume]}
        </output>
      </form>
    </div>
  );
};

export default Range;
