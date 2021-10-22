import React from "react"
import './RadioButtons.css'

const RadioButtons = ({value, setValue, valueArray}) => {
  return (
    <div className="radio-container">
      {valueArray.map((item) => (
        <label className="radio-label" key={item}>
          <input
            type="radio"
            value={item}
            onChange = {event => setValue(event.target.value)}
            checked={value === item}
          />
          {item}
        </label>     
      ))}   
    </div>
  )
}

export default RadioButtons