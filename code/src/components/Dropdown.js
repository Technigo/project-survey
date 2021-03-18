import React from 'react'

const Dropdown = (props) => {

  const onValueChange = (event) => {
    props.setValue(event.target.value)
  }

  return (
    <>
      <label className="form-label">{props.questionText}</label>
        <select className="drop-down"
          onChange={onValueChange}
          value={props.chosenValue}
        >
          {props.options.map(option => (
            <option value={option}>{option}</option>
          ))}
        </select>
    </>
  )
}

export default Dropdown