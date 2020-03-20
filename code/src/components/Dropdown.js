import React from "react"

export const Dropdown = (props) => {

  const { option, setOption, setProgress } = props

  return (
    <>
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
        <option value="Not attending">I said, I'm not going!</option>
      </select>
      {setProgress(75)}
    </>
  )
}