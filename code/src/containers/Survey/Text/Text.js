import React, { useState } from 'react'

const Text = (props) => {
  const [answer, setAnswer] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddAnswer(answer)
  }

  return (
    <form onSubmit={submitHandler}>
      <h3>{props.object.question}</h3>
      <input
        type="text"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer} />
      <button type="submit">NEXT</button>
    </form>
  )
}

export default Text