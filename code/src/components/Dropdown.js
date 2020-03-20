import React from "react"

export const Dropdown = (props) => {

  const { option, setOption, setProgress } = props

  return (
    <>
      <label htmlFor="options"><h2>What ticket do you want?</h2></label>
      <select
        name="options"
        id="options"
        onChange={event => setOption(event.target.value)}
        value={option}
      >
        <option value="">Select an option</option>
        <option value="Silver pass">Silver pass</option>
        <option value="Gold pass">Gold Pass</option>
        <option value="Platinum pass">Platinum Pass</option>
      </select>
      {setProgress(75)}
    </>
  )
}