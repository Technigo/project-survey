import React from "react"

const ColorInput = ({
  colorInput,
  onPreviousQuestionChange,
  handleColorInputChange,
  onNextQuestionChange,
}) => {
  return (
    <form className="namebox">
      <label className="question" htmlFor="nameInput">
        Please select your spacesuits color
      </label>
      <input
        className="color-input"
        type="color"
        value={colorInput}
        onChange={handleColorInputChange}
      />
      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          NEXT
        </button>
      </div>
    </form>
  )
}

export default ColorInput
