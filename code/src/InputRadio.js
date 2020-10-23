import React from 'react';

export const InputRadio = ({ label, id, array, state, setState }) => {
  return (
    <>
      <p tabIndex="0">{label}</p>

      {array.map(item => (

        <div key={item} className="input-radio">
          <input
            type="radio"
            id={item}
            value={item}
            checked={state === item}
            onChange={event => setState(event.target.value)}
            required
            name={id}
          />
          <label htmlFor={item} className="radio-label">{item}</label>
        </div>

      ))}
      
    </>
  )
}