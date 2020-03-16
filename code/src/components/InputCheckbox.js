import React from 'react'

export const InputCheckbox = (props) => {
  const { label, state, setState } = props

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