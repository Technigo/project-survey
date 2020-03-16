import React from 'react'

export const InputCheckbox = (props) => {
  const { state, setState } = props

  return (
    <label>
      <input
        type="checkbox"
        value={state}
        onChange={event => setState(event.target.checked)}
      />
    </label>
  )
}