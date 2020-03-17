import React from 'react'

export const InputSelect = ({ label, id, array, state, setState }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>

      <select
        onChange={event => setState(event.target.value)}
        id={id}
        value={state}
        required
      >
        <option value="" disabled>Select</option> {/* First item in list */}

        {/* Render select options from array (props) */}
        {array.map(item => (
          < option key={item} value={item} > {item}</option>
        ))}

      </select>

    </>
  )
}