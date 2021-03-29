import React from 'react'

const TextInput = (props) => {
  const { label, inputId, values, placeholder, onEnterResponse, onInputResponse, onButtonResponse } = props
  
  const handleKeyDown = (e) => {
    console.log(e, e.key)
    if (e.key === 'Enter') {
      onButtonResponse('next')
      // e.preventDefault()
      // onEnterResponse(e)
      // console.log('Enter pressed in texinput')
    // } else {
    }
  }
  
  const handleChange = (e) => {
    onInputResponse(e.target.id, e.target.value, e.target.type)

  }

  return (
    <div className="question text">
      <label className="question-text" htmlFor={inputId}>{label}</label>
      <input className="input text"
        id={inputId} 
        spellCheck="false"
        autoComplete="off"
        type="text" 
        placeholder={placeholder}
        value={values[inputId]}
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => handleKeyDown(e)}

        />
    </div>
  )
}

export default TextInput

