import React from "react"

// onClick hide the previous content and display summary of answers
export const Submit = (props) => {

  return (
    <section className="section-container">
      <button type="submit" autoFocus>{props.text}</button>
    </section>
  )
}

export default Submit;