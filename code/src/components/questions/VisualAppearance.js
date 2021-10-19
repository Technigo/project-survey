import React from "react"

const VisualAppearance = ({visualAppearance, setVisualAppearance}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        <p>How visually appealing is the header section to you?</p>
        <input
          type="range"
          onChange= {event => setVisualAppearance(event.target.value)}
          value= {visualAppearance}
          min="1" 
          max="5"
        />  
      </form>
  )
}

export default VisualAppearance