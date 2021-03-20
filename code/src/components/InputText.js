import React from 'react'

const InputText = ({question, inputTextValue, onChangeFunction}) => {
    
  return (
    <label htmlFor={inputTextValue} className='question-label-wrap'>
      <h2 className='question'>{question}</h2>
      <input
        type='text'
        id={inputTextValue}
        value={inputTextValue}
        onChange={onChangeFunction}
        className='text-input-format'
        placeholder='Type here...'
      />
    </label>
    )
}

export default InputText