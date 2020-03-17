import React from 'react'

export const InputText = ({ label, id, state, setState }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={event => setState(event.target.value)}
        value={state}
        minLength="2"
        required
      />
    </>
  )
}