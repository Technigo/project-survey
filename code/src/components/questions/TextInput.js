import React, { useState } from 'react'

export const TextInput = props => {
  const { title, fields } = props.data
  const [state, setState] = useState({})

  const handleChange = e => {
    const { id, value } = e.target
    setState({ ...state, [id]: value })
  }

  return (
    <>
      <h2>{title}</h2>
      {fields.map(field => {
        const { id, label, placeholder } = field
        return (
          <label key={id}>
            {label}
            <input
              type='text'
              id={id}
              placeholder={placeholder}
              value={state[id]}
              onChange={handleChange}
            />
            <p>Input:{state[id]}</p>
          </label>
        )
      })}
    </>
  )
}
