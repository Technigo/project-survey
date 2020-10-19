import React, { useState } from 'react'

// Age
const ageGroups = ["20-24", "25-29", "30-34", "35-39", "40-44", "45+"];

const InputAge = () => {
  
  const [ageGroup, setAgeGroup] = useState()

  return (
    <form className="input-age">
      Age Group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === group} 
          />
          {group + " "}
        </label>
      ))}
    </form>
  )
}
export default InputAge
