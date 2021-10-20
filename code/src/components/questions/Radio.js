import React from 'react'

export const Radio = props => {
  const { title, options, type, id } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      {options.map(option => {
        const { id, label, value, next_question } = option
        return (
          <label key={id}>
            {label}
            <input
              type='radio'
              checked={state[type + id] === value}
              name={type + id}
              id={type + id}
              value={value}
              onChange={handleChange}
              next-question={next_question}
            />
          </label>
        )
      })}
    </>
  )
}
