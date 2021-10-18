import React from 'react'

export const DropDown = props => {
  const { title, options, id } = props.data
  // console.log('radio props: ', props)
  // console.log('radio fields: ', options)
  return (
    <>
      <h2>{title}</h2>
      <select name='select' id='select' defaultValue={'Select an option'}>
        {options.map(option => {
          return (
            <option key={option.label + id} value={option.value} hidden={option.hidden}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
