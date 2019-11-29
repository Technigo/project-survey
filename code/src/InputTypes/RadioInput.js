import React from "react";

const RadioInput = ({ label, checked, onChange, answers }) => {  
  return (
    <label className="radio-label">
      <input
        type='radio'
        value={label}
        checked={checked} 
        onChange={event => {
          event.persist()
          onChange(event)
        }}
        onClick={() => {
          console.log('onClick')
          console.log(answers)
          
        }}
      />
      {label}
    </label>
  )
}
export default RadioInput