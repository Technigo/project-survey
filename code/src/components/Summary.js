import React from "react"

const Summary = ({
  nameInput,
  ageInput,
  locationInput,
  checkboxGroup,
  colorInput,
}) => {
  return (
    <section className="summary-text">
      <h2> Dear {nameInput}, </h2>
      <h3>
        Here's your summary to the Moon trip with the {locationInput} Spaceship
        🚀🚀🚀
      </h3>
      <h3>You will stay there {ageInput} !</h3>
      <h3>
        You won't be alone!
        <span> {checkboxGroup.join(" and ")} </span> will keep your company!
      </h3>
      <h3>
        Your spacesuits color will be{" "}
        {/* <span role="img" aria-label="astrounot">
          👩🏻‍🚀
        </span> */}
        <span
          style={{ backgroundColor: `${colorInput}`, color: `${colorInput}` }}
        >
          {" "}
          . . .{" "}
        </span>{" "}
      </h3>
      <div className="submit-button">
        <button
          onClick={() => window.location.reload(false)}
          className="glow-on-hover"
        >
          SUBMIT
        </button>
      </div>
    </section>
  )
}
//  <span className='highlighted-text'>{checkboxGroup.join(', ')}</span>
export default Summary
