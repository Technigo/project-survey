import React from 'react';

const NameQ = ({ name, setName }) => {
  const handleUserNameInputChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div className="container">
      <p>Hi there! What is your name?</p>
      <input type="text" value={name} onChange={handleUserNameInputChange} />
    </div>
  )
}

export default NameQ