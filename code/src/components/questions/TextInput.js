import React from 'react'

export const TextInput = props => {
  const { title, options, number } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      {options.map(option => {
        return (
          <label key={option.id}>
            {option.label}
            <input
              type='text'
              id={option.id}
              placeholder={option.placeholder}
              value={state[option.id]}
              onChange={e => handleChange(e, 0, title, number, option.label)}
            />
          </label>
        )
      })}
    </>
  )
}
