import React from "react"

const RadioInput = ({ choice, setChoice, data }) => {
  const handleChange = (event) => {
    setChoice(event.target.value)
  }

  return (
    <div className="radio-container">
      <label htmlFor="radio">
        <h2>{data.label}</h2>
      </label>
      {data.choices.map(item =>
        <label key={item}>
          <input
            id="radio"
            type="radio"
            name={data.field}
            value={item}
            onChange={handleChange}
            checked={choice === item}
          />
          {item}
        </label>
      )}
    </div>
  )
}

export default RadioInput