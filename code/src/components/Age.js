import React from 'react'

const ageGroups = ['0-19','20-29','30-39','40-49','50+',] 

export const AgeRadioOption = ({ageGroupSpan, setAgeGroup}) => {
  
  return (
  <div>
    <p>Age</p>
      {ageGroups.map((age) => (
        <label htmlFor='age' key={age}>
        <input
        name='age'
        type="radio"
        value={age}
        onChange={(event) => setAgeGroup(event.target.value)}
        checked={ageGroupSpan === age}
        aria-label='radio button select'
        required
        />
        {age}
        </label>
      ))}
    </div> 
  
)
}





      