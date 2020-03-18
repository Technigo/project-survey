import React from 'react';

export const NameEntry = ({name, setName}) => {
  return (
    <label>Please enter your name
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </label>
  )
}