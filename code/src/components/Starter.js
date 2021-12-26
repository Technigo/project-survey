import React from "react"

const Starter = ({ onNextQuestionChange }) => {
  return (
    <section className="starter">
      <h1 className="welcome-text">
        Apply for a free trip to the moon
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>

      <button className="glow-on-hover" onClick={onNextQuestionChange}>
        START
      </button>
    </section>
  )
}

export default Starter
