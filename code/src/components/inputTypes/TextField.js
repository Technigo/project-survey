import React from "react"

const TextField = ({value, setValue}) => {
  return (
    <div onSubmit= {event => event.preventDefault()}>
    <input
      type="text"
      onChange= {event => setValue(event.target.value)}
      value= {value}
    />  
  </div>
  )
}

export default TextField