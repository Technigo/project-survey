import React from "react"

const Starter = ({ onNextQuestionChange }) => {
  return (
    <section className="starter">
      <h1 className="welcome-text">
        Apply for a free trip to the moon{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>

      {/* <div className="button-container"> */}
      <button className="glow-on-hover" onClick={onNextQuestionChange}>
        START
      </button>
      {/* </div> */}
    </section>
  )
}

export default Starter
