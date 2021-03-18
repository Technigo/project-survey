import React from 'react'

const TextInput = (props) => {

  const onValueChange = (event) => {
    props.setValue(event.target.value) 
  }

  return (
    <>
      <label className="form-label" htmlFor={props.questionName}>{props.questionText}</label>
      <input className="form-text-input"
        name={props.questionName} 
        type="text" 
        required
        onChange={onValueChange}
        value={props.chosenValue}
      
      /> 
    </>
  )
}

export default TextInput