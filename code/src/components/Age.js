import React from 'react';

export const Age = ({ age, setAge }) => {
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <form>
     Your age?
       <label>
            <input
                
                type="radio"
                value ="18-24"
                onChange={handleAgeChange} 
                checked = {age === "18-24"}
            /> 
        18-24
        </label>
        <label>
            <input
                type="radio"
                value ="25-34"
                onChange={handleAgeChange} 
                checked = {age === "25-34"}
            /> 
        25-34
    </label>
    <label>
            <input
                type="radio"
                value ="35+"
                onChange={handleAgeChange} 
                checked = {age === "35+"}
            /> 
        35+

    </label>
    
    </form>
  );
};


