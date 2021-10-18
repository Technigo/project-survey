import React from 'react'

export const DropDown = props => {
  const { title, options, type, id } = props.data
  console.log('radio props: ', props)
  console.log('radio fields: ', options)
  return (
    <div>
      <h2>{title}</h2>
      <select name='select' id='select' defaultValue={'Select an option'}>
        {options.map(option => {
          return (
            <option value={option.value} hidden={option.hidden}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
