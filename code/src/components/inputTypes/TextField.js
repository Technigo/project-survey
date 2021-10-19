import React from "react"

const TextField = ({value, setValue}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
    <input
      type="text"
      onChange= {event => setValue(event.target.value)}
      value= {value}
    />  
  </form>
  )
}

export default TextField