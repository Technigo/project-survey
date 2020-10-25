import React from 'react'

const InputAge = ( {question, array, ageGroup, setAgeGroup }) => {
  
  return (
    <>
      <h3 tabIndex="0">{question}</h3>
      {array.map((group) => (
        <label 
          className="input-age" 
          htmlFor={group} 
          key={group}
          tabIndex="0">
          <span className="checkmark"></span>
          <input
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
    </>
  );
};
export default InputAge;
