import React from "react";

const RadioInput = ({label, setAnswers, answers, checked, onChange, ...props}) => {  
  return (
    <label>
      <input
        type='radio'
        value={label}
        checked={checked} 
        onChange={event => {
          event.persist()
          onChange(event)
        }}
      />
      {label}
    </label>
  )
}

export default RadioInput