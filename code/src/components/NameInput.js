import React, { useState } from 'react'

const NameInput = () => {
  const [name, setName] = useState ('')

  const onNameInput = (event) => {
    setName (event.target.value)
  }


return (
  <div className='name-input'>
    <h2>Whats your name Ice Cream lover?</h2>
    <label>Whats your name?</label>
  <input 
  id='name' 
  type='text'
  value={name}
  onChange={ onNameInput }
  />
  </div>
)
}

export default NameInput;