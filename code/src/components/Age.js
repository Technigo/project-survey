import React, { useState } from 'react'

const ageGroups = ['0-19','20-29','30-39','40-49','50+',] 

export const Age = () => {
  const [ageGroup, setAgeGroup] = useState()

  const onAgeSelect = (event) => {
    setAgeGroup(event.target.value)
    console.log(event.target.value)
   
  }

  return (
  <div>
      <p>How old are you?</p>
      {ageGroups.map(group => (
        <label key={group}>
        <input 
        type='radio'
        onChange={onAgeSelect}
        value={group}
        checked={ageGroup === group}
        />
        {group}
        </label>
      ))}
  </div>


  )
}




      