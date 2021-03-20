import React from 'react'

const InputRadioButton = ({item, onEnjoyReadingChange}) => {
  
  return (
    <label htmlFor={item} key={item}>
      <input
        type='radio'
        name='radio'
        id={item}
        value={item}
        onChange={onEnjoyReadingChange}
      />
      {item} 
    </label>
  )
}

export default InputRadioButton