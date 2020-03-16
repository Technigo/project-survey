import React from 'react'

export const InputRadio = (props) => {
  const { label, array, state, setState } = props

  return (
    <label>
      {label}

      {/* Render radio buttons from array (props) */}
      {array.map(item => (

        <div key={item}>
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