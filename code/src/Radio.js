import React from 'react';


  const ageGroups = [
      "kitten",
      "grown up",
      "senior"
  ]

const Radio = ({ ageGroup , setAgeGroup }) => {
    return (  
        <form>
          <fieldset>
          <legend>Choose an age for your Dream cat</legend>
          {ageGroups.map(group => (
              <label key ={group}> 
                  <input 
                  type ="radio" 
                  value = {group}
                  onChange = {(event) => setAgeGroup(event.target.value) }
                  checked = {ageGroup === group}
                  required
                 />
                {group} 
              </label>
          ))}
          </fieldset>   
          </form> 
    );
};

export default Radio;
