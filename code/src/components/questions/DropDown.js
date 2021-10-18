import React from 'react'

export const DropDown = props => {
  return (
    <div>
      <label>Options </label>
      <select name='select' id='select' placeholder={'Select an option'}>
        <option disabled>Select an option</option>
        <option value='option1'>option1</option>
        <option value='option2'>option2</option>
        <option value='option3'>option3</option>
      </select>
    </div>
  )
}
