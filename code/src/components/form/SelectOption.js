import React from 'react'


export const SelectOption = (props) => {
  return (
    <option value={props.value}>
      {props.option}
    </option>
  )
}
