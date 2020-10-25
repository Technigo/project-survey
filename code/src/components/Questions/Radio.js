import React from 'react';


const RadioGroup = ({ userHabits, onHabitsChange }) => {

  return (

    <div className="question-card">
      <h3 className="question-header" tabIndex="0">Are you able to release old habits, rules or beliefs that no longer serve you?</h3>
      <label htmlFor="always">Always</label>
      <input
        id="always"
        type="radio"
        name="radio-option"
        checked={userHabits.includes('always')}
        onChange={() => onHabitsChange('always')}
      />
      <label htmlFor="mostly">Mostly</label>
      <input
        id="mostly"
        type="radio"
        name="radio-option"
        checked={userHabits.includes('mostly')}
        onChange={() => onHabitsChange('mostly')}
      />
      <label htmlFor="whatever">Whatever</label>
      <input
        id="whatever"
        type="radio"
        name="radio-option"
        checked={userHabits.includes('whatever')}
        onChange={() => onHabitsChange('whatever')}
      />


    </div>

  );

};



export default RadioGroup;