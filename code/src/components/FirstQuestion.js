import React from "react"

const FirstQuestion = ({
  nameInput,
  emailInput,
  onEmailInputChange,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="nameInput">
          <h1>Tell us your name and email</h1>
        </label>
        <div className="name-email-wrapper">
          <form>
            <input
              className="name-input"
              id="nameInput"
              type="text"
              placeholder="Name"
              value={nameInput}
              onChange={onNameInputChange}
            />

            <label htmlFor="email">
              <input
                className="email-input"
                type="email"
                placeholder="Email"
                id="email"
                value={emailInput}
                onChange={onEmailInputChange}
              />
            </label>
          </form>
        </div>

        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
      <p className="current-step">
        ➤ Personal Information
        <span className="progress">
          ➤ Destination ➤ Price conditions ➤ Nights ➤ Overview
        </span>
      </p>
    </section>
  )
}

export default FirstQuestion
