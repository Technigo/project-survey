import React from 'react';

export const InputText = ({ label, id, placeholder, state, setState }) => {
  return (
    <div className="input-text">
      <label htmlFor={id} tabIndex="-1" aria-label="Enter your name">{label}</label>
      <input
        type="text"
        id={id}
        onChange={event => setState(event.target.value)}
        value={state}
        placeholder={placeholder}
        required
      />
    </div>
  )
}