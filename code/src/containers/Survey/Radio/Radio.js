import React, { useState } from 'react'

const Radio = (props) => {
  const [answer, setAnswer] = useState(props.object.options[0])

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddAnswer(answer)
  }

  const options = props.object.options.map((option, index) => {
    const key = `${index}option`
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className="radio-btn" key={key}>
        <input
          type="radio"
          value={option}
          onChange={(e) => setAnswer(e.target.value)}
          checked={answer === option} />
        {option}
      </label>
    )
  })

  return (
    <form onSubmit={submitHandler}>
      <h3>{props.object.question}</h3>
      <div>
        {options}
      </div>
      <button type="submit">NEXT</button>
    </form>
  )
}

export default Radio