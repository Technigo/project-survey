import React from "react"

const RadioInput = ({ label, checked, onChange }) => {  
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
      />
      {label}
    </label>
  )
}

export default RadioInput