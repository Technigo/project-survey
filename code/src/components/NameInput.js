import React from 'react'

const NameInput = ({name, setName}) => {
  

return (
  <div className='name-box' onSubmit={event => event.preventDefault()} >
    <h2 tabIndex='0'>Whats your name Ice Cream lover?</h2>
    <label htmlFor='name'className='fill-in'tabIndex='0'>
      <input 
      className='fill-in-field'
      id='name' 
      type='text'
      value={name}
      onChange={event => setName(event.target.value)} 
      aria-label='Enter your name here'
      required
      />
    </label>
  </div>
)
}

export default NameInput;