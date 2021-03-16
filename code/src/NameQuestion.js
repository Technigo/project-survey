import React, {useState} from 'react'

const NameQuestion = () => {

  const [name, setName] = useState('');
  return (
    <>
      <label for="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        onChange={event => setName(event.target.value)}
        value={name}
      />
      <h1>Hi {name}!</h1>
    </>

  )
}

export default NameQuestion;