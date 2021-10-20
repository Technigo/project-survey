import React from "react"

const Imagecheckbox = ({
  //   image,
  onChangeFunction,
  checkboxGroup,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  // const images = [
  //   "PIVOT!!!",
  //   "I'm more than just a pretty blonde with an ass that won't quit.",
  //   "They don't know that we know that they know!",
  //   "You can’t just give up! Is that what a dinosaur would do?",
  //   "Okay, no uterus, no opinion.",
  //   "I’m not so good with the advice. Can I interest you in a sarcastic comment?",
  // ]

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
          Which "Friends" character should you be with there?{" "}
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
      </form>
      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          NEXT
        </button>
      </div>
    </>
  )
}

export default Imagecheckbox
