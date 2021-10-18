import React from 'react'

export const Radio = props => {
  const { title, options, type, id } = props.data
  return (
    <>
      <h2>{title}</h2>
      {options.map(option => {
        return (
          <label key={Math.random() * 10 + id}>
            {option.label}
            <input type='radio' name={type + id} />
          </label>
        )
      })}
    </>
  )
}
