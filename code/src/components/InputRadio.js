import React from 'react'

export const InputRadio = ({ label, array, state, setState }) => {

  return (
    <label>
      {label}

      {/* Render radio buttons from array (props) */}
      {array.map(item => (

        <div key={item} className="radio-btn">
          <input
            type="radio"
            value={item}
            onChange={event => setState(event.target.value)}
            checked={state === item}
            required
            name="radioBtn"
          />
          {item}
        </div>

      ))}

    </label>
  )
}