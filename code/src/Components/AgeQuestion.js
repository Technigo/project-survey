import React, { useState } from 'react';

const ageGroups = [
  '15-20',
  '20-29',
  '30-39',
  '40-49',
  '50-59',
  '60-69',
  '70-79',
  '80-89',
  '90+']
console.log(ageGroups)

const AgeQuestion = ({age, setAge}) => {
  
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

    return (
      <>
        <h2>How old are you?</h2>
          <form className="radio-buttons">
              {ageGroups.map(group => (
                <label key ={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={handleAgeChange}
                    checked={age === group}
                    />
                    {group}
                  </label>
              ))}
          </form>
      </>
    )
}
  export default AgeQuestion