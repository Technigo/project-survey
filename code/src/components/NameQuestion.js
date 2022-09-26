import React, { useState } from 'react';

const NameQuestion = () => {
  const [name, setName] = useState('')
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1> My name is: {name}</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name} />
    </form>
  )
}

export default NameQuestion;