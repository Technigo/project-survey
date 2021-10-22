import React from "react"

const Summary = ({
  nameInput,
  ageInput,
  locationInput,
  checkboxGroup,
  colorInput,
  onNextQuestionChange,
}) => {
  return (
    <>
      <section className="summary-text">
        <h2> Dear {nameInput}, </h2>
        <h3>
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Here's your summary to the Moon trip with the {locationInput}{" "}
          Spaceship!
        </h3>

        <h3>
          {" "}
          <span role="img" aria-label="calender">
            📆
          </span>{" "}
          You will stay there {ageInput} !
        </h3>
        <h3>
          <span role="img" aria-label="astrounot">
            👩🏻‍🚀
          </span>{" "}
          Your spacesuits' color will be{" "}
          <span
            style={{ backgroundColor: `${colorInput}`, color: `${colorInput}` }}
          >
            {" "}
            . . .{" "}
          </span>{" "}
        </h3>
        <h3>
          <span role="img" aria-label="astrounot">
            🌚
          </span>{" "}
          You won't be alone!
          <span> {checkboxGroup.join(" and ")} </span> will keep your company!
        </h3>

        <div className="submit-button">
          <button className="glow-on-hover" onClick={onNextQuestionChange}>
            SUBMIT
          </button>
        </div>
      </section>
    </>
  )
}

//  <span className='highlighted-text'>{checkboxGroup.join(', ')}</span>
export default Summary
