import React from "react"

const Starter = ({ onStepChange }) => {
  return (
    <div className="starter">
      <h1 className="welcome-text">Apply now for a free trip to the moon 🚀</h1>
      <button className="glow-on-hover" onClick={onStepChange}>
        START
      </button>
    </div>
  )
}

export default Starter
