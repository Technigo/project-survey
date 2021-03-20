import React from 'react';

export const NameInput = ( {name, setName}) => {
  const onNameChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div className='question-wrapper'>
      <label htmlFor='name' className='question'>What is your name?</label>
      <input id='name' type='text' value={name} onChange={onNameChange} required />
    </div>
  )
}