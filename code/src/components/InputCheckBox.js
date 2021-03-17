import React from 'react'

const InputCheckBox = ({question, onChangeFunction, isChecked}) => {
  return(
    <label htmlFor='check' className='checkbox-container'>
      <input
        type='checkbox'
        id='check'
        onChange={onChangeFunction}
        checked={isChecked}
        className='checkbox'
      />
      <h2 className='question-checkbox'>{question}</h2>
    </label>
  )
}

export default InputCheckBox