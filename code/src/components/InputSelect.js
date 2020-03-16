import React from 'react'

export const InputSelect = (props) => {
  const { state, setState } = props

  return (
    <label>
      <select
        onChange={event => setState(event.target.value)}
        value={state}
      >
        <option value="">Select</option>
        <option value="lemon">Lemon</option>
        <option value="vanilla">Vanilla</option>
        <option value="butter">Butter</option>
      </select>
    </label>
  )
}