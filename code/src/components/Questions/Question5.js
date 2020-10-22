import React from 'react';





const Kind = ({ kindness, setKindness }) => {

  return (
    <div>
      <h3 className="question">I am kind to myself</h3>
      <label htmlFor="always">Always</label>
      <input
        id="always"
        type="radio"
        checked={kindness.includes('always')}
        onChange={() => onKindnessChange('always')}
      />
      <label htmlFor="mostly">Mostly</label>
      <input
        id="mostly"
        type="radio"
        checked={kindness.includes('mostly')}
        onChange={() => onKindnessChange('mostly')}
      />
      <label htmlFor="whatever">Yeah, whatever dude</label>
      <input
        id="whatever"
        type="radio"
        checked={kindness.includes('whatever')}
        onChange={() => onKindnessChange('whatever')}
      />

    </div>

  );

};



export default Kind;