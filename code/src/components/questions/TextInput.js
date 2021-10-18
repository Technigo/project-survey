import React, { useState } from 'react'

export const TextInput = props => {
  const { title, fields } = props.data
  const [state, setState] = useState({})
  const testObject = { ...state }
  console.log(testObject)

  const handleChange = event => {
    console.log(event.target)
    console.log('first log: ')
    console.log('the tag id:', event.target.id, ',the value:', event.target.value)
    // setState(event.target.value)
    setState({ ...state, [event.target.id]: event.target.value })
    console.log('new state:', state)
  }
  console.log('redering textinput component')
  return (
    <>
      <h2>{title}</h2>
      {fields.map(field => {
        return (
          <label key={field.id}>
            {field.label}
            <input
              type='text'
              id={field.id}
              placeholder={field.placeholder}
              value={state[field.id]}
              // [field.label]
              onChange={handleChange}
            />
            <p>Input:{state[field.id]}</p>
            {/* [field.label] */}
          </label>
        )
      })}
    </>
  )
}
