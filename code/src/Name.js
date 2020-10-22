import React from 'react'


export const Name = ({name, setName}) => {

  return (
    <div className="welcome-wrapper">
      <label>
      Welcome! What's your name?*
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Type your name here..."
          required>
        </input>
      </label>
    </div>
  )
}