import React from 'react'

const InputDropDown = ({question, dropDownvalue, onChangeFunction}) => {
  return(
    <label htmlFor='select-format'>
      <h2>{question}</h2>
      <select value={dropDownvalue} onChange={onChangeFunction} id='select-format' name='select-format'>
          <option disabled></option>
          <option value="Electronic">Electronic</option>
          <option value="Print">Print</option>
          <option value="Audio Books">Audio books</option>
          <option value="No preference">No preference</option>
      </select>
    </label>
  )
}

export default InputDropDown