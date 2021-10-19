import React from 'react'

export const DropDown = props => {
  const { title, options, id, type } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      <select
        name='select'
        id={type + id}
        // defaultValue={'Select an option'}
        onChange={handleChange}>
        {options.map(option => {
          return (
            <option
              hidden={option.hidden}
              selected={state[type + id] === option.value}
              key={option.label + id}
              value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
