import React from "react"

// onClick hide the previous content and display summary of answers
export const Submit = () => {

  return (
    <section className="section-container">
      <button
        type="submit"
        autoFocus
        //onClick I want to hide all questions (display=none?) and display answers -> if NO ->
        //"You chose not to have the cleaning service inlcuded."
        onClick={}
      >
        Submit
      </button>
    </section>
  )
}

export default Submit;