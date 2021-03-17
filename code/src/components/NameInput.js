import React from 'react'

const NameInput = ({name, setName}) => {
  

return (
  <div className='name-box' onSubmit={event => event.preventDefault()} >
    <h2>Whats your name Ice Cream lover?</h2>
    <label >Fill this in:
      <input 
      id='name' 
      type='text'
      value={name}
      onChange={event => setName(event.target.value)} 
      />
    </label>
  </div>
)
}

export default NameInput;