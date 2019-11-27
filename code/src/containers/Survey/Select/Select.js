import React, { useState } from 'react'

const Select = (props) => {
  const [answer, setAnswer] = useState(props.object.options[0])

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddAnswer(answer)
  }

  const options = props.object.options.map((option, index) => {
    const key = `${index}option`
    return (
      <option value={option} key={key}>{option}</option>
    )
  })

  return (
    <form onSubmit={submitHandler}>
      <h3>{props.object.question}</h3>
      <select
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}>
        {options}
      </select>
      <button type="submit">NEXT</button>
    </form>
  )
}

export default Select