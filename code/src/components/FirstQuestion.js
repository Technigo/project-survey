import React from "react"

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="nameInput">
          <h1>Tell us your name</h1>
        </label>
        <form>
          <input
            className="name-input"
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
          />
        </form>
        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
    </section>
  )
}

export default FirstQuestion
