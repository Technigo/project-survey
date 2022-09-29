import React from 'react';

const Radiocake = ({ cakeQuality, onCakeQualityChange, onCounterChange }) => {
  const cakeQualities = [
    'sweeter! Pour sugar on me, babe',
    'less sweet. Namaste',
    'a lot more varieties on cakes, duh',
    'bigger size, like my ego',
    'tiny size option available (for my child hehe)',
    'the same! Overall, I love your cakes but I might complain later anyway'
  ]

  return (
    <form className="container">
      <h3>How can we improve the quality of our cakes?</h3>
      {cakeQualities.map((quality) => (
        <label htmlFor="cakeQuality" key={cakeQuality} className="quality-cake">
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

export default Radiocake;