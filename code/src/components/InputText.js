import React from 'react'

export const InputText = ({ label, state, setState }) => {

  return (
    <label>
      {label}

      <input
        type="text"
        onChange={event => setState(event.target.value)}
        value={state}
        minLength="2"
        required
      />

    </label>
  )
}