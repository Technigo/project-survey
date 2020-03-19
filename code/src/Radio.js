import React, { useState } from 'react'

const ageGroups = ["0-18", "19-29", "30+"]

export const Radio = () => {
  const [ageGroup, setAgeGroup] = useState()

  return (
    <form>
      Choose your age group :
      {ageGroups.map(group => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  )
}