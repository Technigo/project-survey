import React from 'react'

export const InputRadio = ({ label, id, array, state, setState }) => {

  return (
    <>
      <p>{label}</p>

      {/* Render radio buttons from array (props) */}
      {array.map(item => (

        <div key={item} className="radio-btn">
          <input
            type="radio"
            id={item}
            value={item}
            onChange={event => setState(event.target.value)}
            checked={state === item}
            required
            name="radioBtn"
          />
          <label htmlFor={item} className="radio-label">{item}</label>
        </div>

      ))}

    </>
  )
}