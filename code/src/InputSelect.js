import React from 'react';

export const InputSelect = ({ label, id, array, state, setState }) => {
  return (
    <div className="input-select">
      <label htmlFor={id}tabIndex="0">{label}</label>

      <select
        onChange={event => setState(event.target.value)}
        id={id}
        value={state}
        required
      >

        <option value ="" disabled>Select surfboard</option>

       {array.map(item => (
        < option key={item} value={item} >{item} </option>
        ))}

      </select>
    </div>
  )
}