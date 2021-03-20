import React from "react"

const SelectInput = ({ choice, setChoice, data}) => {
  const handleChange = (event) => {
    setChoice(event.target.value)
  }
  return (
    <div className="selector-container">
      <label htmlFor="select">
        <h2>{data.label}</h2>
      </label>
      <select
        id="select"
        onChange={handleChange}
        value={choice}
        className={data.className}
      >
        <option disabled>
        </option>
        {data.choices.map(item =>
          <option key={item}>
            {item}
          </option>
          )}
      </select>
    </div>
  )
}

export default SelectInput