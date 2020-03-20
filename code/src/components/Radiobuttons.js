import React, { useState } from "react"

const attendingOptions = ["Yes, I'm attending", "No, I'm not attending", "Maybe, I'm unsure"]

export const Radiobuttons = (props) => {

  const { setProgress } = props
  const [attendingOption, setAttendingOption] = useState();

  return (
    <>
      <h2>Will you be attending?</h2>
      {attendingOptions.map(option => (
        <label key={option}>{option}
          <input
            type="radio"
            value={option}
            onChange={event => setAttendingOption(event.target.value)}
            checked={attendingOption === option}
          />
        </label>
      ))}
      {setProgress(50)}
    </>
  )
}