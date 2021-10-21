import React from "react"

const CheckboxGroup = ({
  //   image,
  onChangeFunction,
  checkboxGroup,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const checkboxGroupArray = [
    "Joey",
    "Monica",
    "Rachel",
    "Phoebe",
    "Ross",
    "Chandler",
  ]

  return (
    <form>
      <h2 tabindex="0" className="question">
        Which "Friends" character should you be with?{" "}
      </h2>
      {checkboxGroupArray.map((image) => (
        <label htmlFor={image} className="checkbox-label-wrap" key={image}>
          <input
            type="checkbox"
            id={image}
            onChange={() => onChangeFunction(image)}
            checked={checkboxGroup.includes(image)}
            className="checkbox-group"
          />
          <h3 className="option-checkbox">{image}</h3>
        </label>
      ))}

      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          CONTINUE
        </button>
      </div>
    </form>
  )
}

export default CheckboxGroup
