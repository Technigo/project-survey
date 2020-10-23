import React from 'react'

// Age
const InputAge = ( {question, array, ageGroup, setAgeGroup }) => {
  
  return (
    <>
      <h3>{question}</h3>
      {array.map((group) => (
        <label className="input-age" htmlFor={group} key={group}>
          <input
            type="radio"
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
