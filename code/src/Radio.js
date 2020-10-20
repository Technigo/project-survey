import React from 'react';


  const ageGroups = [
      "kitten",
      "grown up",
      "senior"
  ]

const Radio = ({ ageGroup , setAgeGroup }) => {
    return (  
        <form>
          <p>What age do you want your cat to be?</p>
          {ageGroups.map(group => (
              <label key ={group}>
                  <input 
                  type ="radio" required
                  value = {group}
                  onChange = {(event) => setAgeGroup(event.target.value) }
                  checked = {ageGroup === group}
                 />
                {group} 
              </label>
          ))}   
          </form> 
    );
};

export default Radio;
