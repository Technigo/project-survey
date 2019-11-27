import React from 'react'

const Summary = (props) => {
  const answersList = props.answers.map((answer, index) => {
    const key = `${index}answer`
    return (
      <p key={key}>{index + 1} - {answer}</p>
    )
  })
  return (
    <section>
      <h1>Thank You for Your Answers</h1>
      <h3>You can see your answers below</h3>
      {answersList}
    </section>

  )
}

export default Summary