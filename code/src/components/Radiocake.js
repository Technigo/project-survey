import React from 'react';

const Radiocake = ({ cakeQuality, onCakeQualityChange, onCounterChange }) => {
  const cakeQualities = [
    'sweeter! Pour some sugar on me, babe',
    'less sweet. Organic. Eco. Healthhhh',
    'a lot more varieties on cakes, duh',
    'bigger size, like my ego',
    'tiny size option available (it is for my child I swear)',
    'hmm...Overall, I love your cakes but I might complain later anyway'
  ]

  return (
    <form className="container">
      <h3>How can we improve the quality of our cakes?</h3>
      {cakeQualities.map((quality) => (
        <form className="quality-cake">
          <input
            type="radio"
            className="radiocake-button"
            value={quality}
            name="onequality"
            onChange={onCakeQualityChange}
            onChecked={cakeQuality === quality} />
          {quality}
        </form>
      ))}
      <button className="button" type="button" onClick={onCounterChange}>Next Question</button>
    </form>
  );
};

export default Radiocake;

/* label htmlFor="cakeQuality" key={cakeQuality} */