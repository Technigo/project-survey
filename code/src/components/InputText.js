import React from 'react'

const InputText = ({question, inputTextValue, onChangeFunction}) => {
    return (
        <label htmlFor={inputTextValue}>
        <h2>{question}</h2>
        <input
          type='text'
          id={inputTextValue}
          value={inputTextValue}
          onChange={onChangeFunction}
        />
      </label>
    )
}

export default InputText