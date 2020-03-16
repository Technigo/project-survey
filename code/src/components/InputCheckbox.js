import React from 'react'

export const InputCheckbox = ({ label, state, setState }) => {

  return (
    <label>
      {label}

      <input
        type="checkbox"
        value={state}
        onChange={event => setState(event.target.checked)}
      />

    </label>
  )
}