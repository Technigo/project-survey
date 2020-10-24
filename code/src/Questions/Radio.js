import React from 'react';


const ageGroups = [
    "kitten",
    "grown up",
    "senior"
]

const Radio = ({ ageGroup , setAgeGroup }) => {
    return (  
        <fieldset>
          <legend>Choose an age for your Dream cat</legend>
                {ageGroups.map(group => (
                <label htmlFor="age groups" key ={group}> 
                    <input 
                    type ="radio" 
                    name = "age"
                    value = {group}
                    onChange = {(event) => setAgeGroup(event.target.value) }
                    checked = {ageGroup === group}
                    required
                    />
                    {group} 
                </label>
             ))}
        </fieldset>        
    );
};

export default Radio;
