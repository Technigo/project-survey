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
              checked={state[type + id] === option.value}
              name={type + id}
              id={type + id}
              value={option.value}
              onChange={e => handleChange(e, option.next_question, title, id)}
            />
          </label>
        )
      })}
    </>
  )
}
