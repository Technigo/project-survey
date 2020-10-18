import React, { useState } from 'react'

/*
//array for radio btn
const ageGroups = [
  '0-18',
  '19-30',
  '31-40',
  '41-50',
  '51-60',
  '60 +'
]
*/

export const InputRadio = ({ question, array, setAge, selected }) => {
  //const [ageGroup, setAge] = useState();

  return (
    <>
      <h2>{question}</h2>
      {array.map(group => (
        <label key={group} htmlFor={group} className="radio-container">
          <input
            type='radio'
            value={group}
            onChange={event => setAge(event.target.value)}
            checked={selected === group}
          />
          {group}
        </label>
      ))}
    </>
  )
}