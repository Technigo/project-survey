import React from "react"

const RangeSlider = ({value, setValue, min, max}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        <input
          type="range"
          onChange= {event => setValue(event.target.value)}
          value= {value}
          min={min} 
          max={max}
        />  
      </form>
  )
}

export default RangeSlider