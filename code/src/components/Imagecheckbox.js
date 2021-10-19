import React from "react"

const Imagecheckbox = ({
  //   image,
  onChangeFunction,
  checkboxGroup,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const images = [
    "PIVOT!!!",
    "I'm more than just a pretty blonde with an ass that won't quit.",
    "They don't know that we know that they know!",
    "You can’t just give up! Is that what a dinosaur would do?",
    "Okay, no uterus, no opinion.",
    "I’m not so good with the advice. Can I interest you in a sarcastic comment?",
  ]

  return (
    <>
      <form>
        <h2 tabindex="0" className="question">
          What is your favorite quote?
        </h2>
        {images.map((image) => (
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
      </form>
      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          Go Back
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          Continue
        </button>
      </div>
    </>
  )
}

export default Imagecheckbox
