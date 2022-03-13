import React from "react"

const Summary = (props) => {
  const { name, ageGroup, wantsNewsletter, multiple, like, location } = props

  console.log(wantsNewsletter)
  return (
    <>
      <div class="progress">
        <div class="progress-value summary"></div>
      </div>
      <div className="form">
        <section className="text-summary">
          <h2>Summary</h2>
          <p>Name: {name}</p>
          <p>Age group: {ageGroup}</p>
          <p>Wants the newsletter: {wantsNewsletter ? "yes" : "no"}</p>
          <p>Test1: {multiple.test1 ? "yes" : "no"}</p>
          <p>Test2: {multiple.test2 ? "yes" : "no"}</p>
          <p>Like: {like}</p>
          <p>Location: {location}</p>
        </section>
      </div>
    </>
  )
}

export default Summary
