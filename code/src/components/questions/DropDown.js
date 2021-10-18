import React from 'react'

export const DropDown = props => {
  const { title, options, id } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      <select name='select' id='select' defaultValue={'Select an option'} onChange={handleChange}>
        {options.map(option => {
          return (
            <option hidden={option.hidden} key={option.label + id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
