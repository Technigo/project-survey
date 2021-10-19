import React from "react"

const Improve = ({improve, setImprove}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
    <p>How can the portfolio be improved?</p>
    <input
      type="text"
      onChange= {event => setImprove(event.target.value)}
      value= {improve}
    />  
  </form>
  )
}

export default Improve