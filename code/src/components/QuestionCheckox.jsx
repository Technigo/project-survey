import React from "react"

const QuestionCheckox = (props) => {
  const { wantsNewsletter, onNewsletterChange, onStepChange } = props

  return (
    <form>
      <label>
        Newsletter?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={onNewsletterChange}
        />
      </label>
      <button onClick={() => onStepChange(-1)}>Go back</button>
      <button onClick={() => onStepChange(1)}>Next question</button>
    </form>
  )
}

export default QuestionCheckox
