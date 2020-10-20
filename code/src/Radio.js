import React from 'react';


  const ageGroups = [
      "0-18",
      "19-30",
      "31+"
  ]

const Radio = ({ ageGroup , setAgeGroup }) => {
    return (  
        <form>
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
