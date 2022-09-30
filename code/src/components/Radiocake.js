import React from 'react';

const Radiocake = ({ cakeQuality, onCakeQualityChange, onCounterChange }) => {
  const cakeQualities = [
    'sweeter! Sugar rush is life',
    'less sweet. Organic. Eco. Healthhhh',
    'a lot more varieties on cakes, duh',
    'biggger size fit for the whole neighbourhood',
    'tiny size option available (it is for my child I swear)',
    'hmm...Overall, the cakes are amazing but I might complain later anyway'
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
