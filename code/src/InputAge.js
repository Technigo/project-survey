import React from 'react'

const InputAge = ({question, array, ageGroup, setAgeGroup }) => {
  
  return (
    <div className="radio-text-input">
      <h3 tabIndex="0">{question}</h3>
      {array.map((group) => (
        <label 
          tabIndex="0"
          className="input-age" 
          htmlFor={group} 
          key={group}>
          <span className="checkmark"></span>
          <input
            tabIndex="0"
            className="radio-button"
            type="radio"
            role="Radiogroup"
            value={group}
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === group} 
          />
          {" " + group + " "}
        </label>
      ))}
    </div>
  );
};
export default InputAge;
