import React from 'react'

export const TextInput = ({name, onNameChange}) => {

  return (
    <div className="form-question-container">
      <h2 tabIndex="0">What is your name?</h2>
      <label tabIndex="0" htmlFor={name}>Name:</label>
      <input
        type = "text"
        onChange = {onNameChange}
        value= {name}
        id = {name}
        required
      />
    </div>
  )
}

