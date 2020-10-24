import React from 'react';


const RadioGroup = ({ userKindness, onKindnessChange }) => {

  return (

    <div className="question-card">
      <h3 className="question-header">Are you able to release old habits, rules or beliefs that no longer serve you?</h3>
      <label htmlFor="always">Always</label>
      <input
        id="always"
        type="radio"
        checked={userKindness.includes('always')}
        onChange={() => onKindnessChange('always')}
      />
      <label htmlFor="mostly">Mostly</label>
      <input
        id="mostly"
        type="radio"
        checked={userKindness.includes('mostly')}
        onChange={() => onKindnessChange('mostly')}
      />
      <label htmlFor="whatever">Whatever</label>
      <input
        id="whatever"
        type="radio"
        checked={userKindness.includes('whatever')}
        onChange={() => onKindnessChange('whatever')}
      />

    </div>

  );

};



export default RadioGroup;