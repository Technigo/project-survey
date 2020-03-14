import React, { useState } from "react"

export const Dropdown = () => {

  const [option, setOption] = useState("")

  return (
    <>
      <form action="">
        <label htmlFor="options">Select an option</label>
        <select
          name="options"
          id="opions"
          onChange={event => setOption(event.target.value)}
          value={option}
        >
          <option value="">Select an option</option>
          <option value="Silver pass">Silver pass</option>
          <option value="Gold pass">Gold Pass</option>
          <option value="Platinum pass">Platinum Pass</option>
        </select>
      </form>
    </>
  )
}