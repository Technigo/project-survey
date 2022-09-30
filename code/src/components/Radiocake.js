import React from 'react';

const cakeQualities = [
  'sweeter! Sugar rush is life',
  'less sweet. Organic. Eco. Healthhhh',
  'a lot more varieties on cakes, duh',
  'biggger size fit for the whole neighbourhood',
  'tiny size option available (it is for my child I swear)',
  'hmm...Overall, the cakes are amazing but I might complain later anyway'
];

const Radiocake = ({ cakeQuality, onCakeQualityChange, onCounterChange }) => {
  return (
    <form className="container">
      <h3>How can we improve the quality of our cakes?</h3>
      {cakeQualities.map((quality) => (
        <label htmlFor="quality" key={quality} className="quality-cake">
          <input
            type="radio"
            name="cakeQuality"
            className="radiocake-button"
            value={quality}
            onChange={onCakeQualityChange}
            onChecked={cakeQuality === quality}
            required />
          {quality}
        </label>
      ))}
      <button type="button" disabled={cakeQuality === ''} onClick={onCounterChange}>Next Question</button>
    </form>
  );
};

export default Radiocake;
