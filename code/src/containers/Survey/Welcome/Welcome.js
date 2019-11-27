import React from 'react'

const Welcome = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    props.onNextSite()
  }
  return (
    <section>
      <h2>{props.title} - {props.date}</h2>
      <p>Let{'\''}s meet together in {props.place} and empty some bottles after a hard day of work!!!</p>
      <form onSubmit={submitHandler}>
        <button type="submit">LET{'\''}S GO!</button>
      </form>
    </section>

  )
}

export default Welcome