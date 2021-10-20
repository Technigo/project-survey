import React from "react"

const Start = ({ onStepChange }) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="nameInput">
          <h1>WELCOME TO INSTANT TRIP</h1>
        </label>

        <button onClick={onStepChange}>
          Take me to the booking <span role="img" aria-label="arrow"></span>{" "}
        </button>
      </div>
    </section>
  )
}

export default Start
