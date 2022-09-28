import React from 'react';

const Secondquestion = ({ cakeQuality, onCakeQualityChange, onCounterChange }) => {
  const cakeQualities = [
    'Sweeter! Pour sugar on me, babe',
    'Less sweet. Namaste',
    'More varieties on cakes, duh',
    'Bigger size, like my ego',
    'Make tiny size option available (for my child hehe)',
    'Overall, I love your cakes but I might complain later anyway'
  ]

  return (
    <form>
      <p>How can we improve the quality of our cakes?</p>
      {cakeQualities.map((quality) => (
        <label htmlFor="cakeQuality" key={cakeQuality}>
          <input
            type="radio"
            value={quality}
            name="onequality"
            onChange={onCakeQualityChange}
            onChecked={cakeQuality === quality} />
          {quality}
        </label>
      ))}
      <button className="button" type="button" onClick={onCounterChange}>Next Question</button>
    </form>
  );
};

export default Secondquestion;