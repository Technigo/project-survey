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
          const { hidden, value, label, next_question } = option
          return (
            <option
              hidden={hidden}
              selected={state[type + id] === value}
              key={label + id}
              value={value}
              next-question={next_question}>
              {label}
            </option>
          )
        })}
      </select>
    </>
  )
}
