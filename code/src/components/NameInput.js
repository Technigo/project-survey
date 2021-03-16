import React, { useState } from 'react'



const NameInput = () => {

  const [name, setName] = useState('') 

  return (
    <>
    <form>
      <label>Name: 
      <input type="text" 
      onChange={(event) => setName(event.target.value)}
      value={name}
      /> </label>
    </form>
    <h1>Name: {name}</h1>
    </>
  )
  
}

export default NameInput