import React from "react"

const SecondQuestion = ({ location, onLocationChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="location">
          <h1>Choose your destination</h1>
        </label>
        <form>
          <select onChange={onLocationChange} value={location}>
            <option value="">Choose location</option>
            <option value="Paris">Paris</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Seoul">Seoul</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Gambia">Gambia</option>
            <option value="New york">New York</option>
          </select>
        </form>
        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
      <p className="current-step">
        ➤ Personal Information ➤ Destination{" "}
        <span className="progress">
          {" "}
          ➤ Price conditions ➤ Nights ➤ Overview
        </span>
      </p>
    </section>
  )
}

export default SecondQuestion
