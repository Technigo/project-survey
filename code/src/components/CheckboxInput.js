import React from "react"

const CheckboxInput = ({ choice, setChoice, data }) => {
  const handleChange = (event) => {
    choice.includes(event.target.value)
      ? setChoice(
        choice.filter((item) => item !== event.target.value)
      )
    : setChoice([event.target.value, choice])
  }
  return (
    <div className="check-input">
      <label htmlFor="check">
        <h2>{data.label} <span className="not-required">(not required)</span></h2>
      </label>
      <div className="checkboxes">
        {data.choices.map(item =>
          <label key={item}>
            <input
              id={item}
              type="checkbox"
              name={item}
              value={item}
              onChange={handleChange}
            />
            {item}
          </label>
        )}
      </div>
    </div>
  )
}

 export default CheckboxInput