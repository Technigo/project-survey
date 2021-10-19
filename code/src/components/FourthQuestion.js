import React from "react"

const FourthQuestion = ({
  //   character,
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
    <>
      <form>
        <h2 tabindex="0" className="question">
          Choose one of them?
        </h2>
        {checkboxGroupArray.map((character) => (
          <label
            htmlFor={character}
            className="checkbox-label-wrap"
            key={character}
          >
            <input
              type="checkbox"
              id={character}
              onChange={() => onChangeFunction(character)}
              checked={checkboxGroup.includes(character)}
              className="checkbox-group"
            />
            <h3 className="option-checkbox">{character}</h3>
          </label>
        ))}
      </form>
      <div className="button-container">
        <button onClick={onPreviousQuestionChange}>Go Back</button>
        <button onClick={onNextQuestionChange}>Continue</button>
      </div>
    </>
  )
}

export default FourthQuestion
