import React from "react"

const Starter = ({ onStepChange }) => {
  return (
    <div className="starter">
      <h1 className="welcome-text">
        Apply now for a free trip to the moon{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <button className="glow-on-hover" onClick={onStepChange}>
        START
      </button>
    </div>
  )
}

export default Starter
