import React from 'react'






 const Name = ({userName, onInputChange}) => {
    return (
        <form>
        <h1>Welcome to my media survey</h1>
  <label htmlFor="name">Please type your name</label>
  <input
    id="name" 
    type="text"
    value={userName}
    onChange={onInputChange}
  />
  </form>
 
    )
    }


export default Name

  