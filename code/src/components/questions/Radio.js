import React from 'react'

export const Radio = props => {
  const { title, options, type, id } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      {options.map(option => {
        return (
          <label key={option.id}>
            {option.label}
            <input
              type='radio'
              name={type + id}
              id={type + id}
              value={option.value}
              onChange={handleChange}
            />
          </label>
        )
      })}
    </>
  )
}
