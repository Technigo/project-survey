import React from 'react'

const InputCheckBox = ({question, onChangeFunction, isChecked}) => {
  return(
    <label htmlFor='check'>
    <h2>{question}</h2>
      <input
        type='checkbox'
        id='check'
        onChange={onChangeFunction}
        checked={isChecked}
      />
    </label>
  )
}

export default InputCheckBox