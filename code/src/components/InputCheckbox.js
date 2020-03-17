import React from 'react'

export const InputCheckbox = ({ label, id, state, setState }) => {

  return (
    <>
      <input
        type="checkbox"
        id={id}
        value={state}
        onChange={event => setState(event.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </>
  )
}