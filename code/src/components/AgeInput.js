import React from 'react'

export const AgeInput = ({ state, handleInput }) => {
  
  const birthdays = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']

  return (
    <label htmlFor='name'>Which birthday are we celebrating?
      <select 
        type='text'
        name='age'
        value={state}
        onChange={handleInput} 
      >

      {birthdays.map((birthday, index) => (
        <option key={birthday} value={birthday}>{birthdays[index]}</option>
        ))}
      </select>  
    </label> 
  )
}