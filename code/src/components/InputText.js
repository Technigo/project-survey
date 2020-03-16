import React from 'react'

export const InputText = (props) => {
  const { label, state, setState } = props

  return (
    <label>
      {label}

      <input
        type="text"
        onChange={event => setState(event.target.value)}
        value={state}
        required
      />

    </label>
  )
}