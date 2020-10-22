import React from 'react'

const YourName = ({ yourName, onNameChange }) => {

  return (
  <div className="name">
    <h3 tabIndex="0">YOUR NAME</h3>
    <label htmlFor="yourName"></label>
    <input value={yourName} onChange={e => onNameChange(e.target.value)} id="yourName">
    </input>
  </div>
  )
}

export default YourName
