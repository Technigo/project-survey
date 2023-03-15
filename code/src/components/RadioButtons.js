import React from 'react'
import './components.css'

const ageGroups = ['0-18', '19-25', '26-35']

export const RadioButtons = ({ ageGroup, setAgeGroup }) => {
  const handleAgeChange = (event) => {
    setAgeGroup(event.target.value);
  }
  return (
    <form>
      <h2>Which age group do you belong to?</h2>
      {ageGroups.map((group) => (
        <label htmlFor="age" key={group}>
          <input
            type="radio"
            id=""
            onChange={handleAgeChange}
            value={group}
            checked={ageGroup === group} />
          {group}
        </label>
      ))}
    </form>
  )
}