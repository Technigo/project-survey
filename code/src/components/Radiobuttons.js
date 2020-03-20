import React from "react"

const attendingOptions = ["Friday 24th", "Saturday 25th", "Friday 24th and Saturday 25th"]

export const Radiobuttons = (props) => {

  const { setProgress, attendingOption, setAttendingOption } = props

  return (
    <>
      <h2>What day will you be attending?</h2>
      <section className="radio-button-container">
        {attendingOptions.map(option => (
          <label key={option} >{option}
            <input
              type="radio"
              value={option}
              onChange={event => setAttendingOption(event.target.value)}
              checked={attendingOption === option}
            />
          </label>
        ))}
      </section>
      {setProgress(50)}
    </>
  )
}
