import React from 'react'

const ageGroup = [
  '0-18',
  '19-30',
  '31+',
] 

export const Age = () => {
  return (
  <div>
      <p>How old are you?</p>
    <label htmlFor='0-18'>
      <input 
      id='0-18' 
      type='radio'
      onChange=''
      checked=''
      />
       0-18
      </label>
    <label htmlFor='19-30'>
      <input 
      id='19-30' 
      type='radio'
      onChange=''
      checked=''
      /> 
      19-30
    </label>
    <label htmlFor='30+'>
      <input 
      id='30+' 
      type='radio'
      onChange=''
      checked=''
      />
      30+
    </label>
  </div>
  )
}