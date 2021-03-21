import React from "react"

const RangeInput = ({ value, setValue, data }) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="amount">
      <label htmlFor="range">
        <h2>Amount:</h2>
      </label>
      <input
        id="range"
        type="range"
        className={data.className}
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        oninput="this.nextElementSibling.value = this.value"
      />
      <output>
        {value}
      </output>
    </div>
  )
}

export default RangeInput