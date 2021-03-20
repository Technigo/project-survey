import React from 'react'

const InputCheckBoxGroup = ({genre, onChangeFunction, checkboxGroup}) => {
  
  return (
    <label htmlFor={genre} className='checkbox-label-wrap' key={genre}>
      <input
        type='checkbox'
        id={genre}
        onChange={() => onChangeFunction(genre)}
        checked={checkboxGroup.includes(genre)}
        className='checkbox-group'
      />
      <h3 className='option-checkbox'>{genre}</h3>
    </label>
  )
}

export default InputCheckBoxGroup