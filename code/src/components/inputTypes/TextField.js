import React from "react"
import './TextField.css'

const TextField = ({value, setValue}) => {
  return (
    <div>
      <input
        type="text"
        onChange= {event => setValue(event.target.value)}
        value= {value}
        placeholder="Type here"
      />  
    </div>
  )
}

export default TextField