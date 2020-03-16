import React from 'react'

export const InputText = (props) => {
  const { state, setState } = props

  return (
    <label>
      <input
        type="text"
        onChange={event => setState(event.target.value)}
        value={state}
      />
    </label>
  )
}