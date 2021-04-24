import React from 'react'

export const Summary = ({ questions, userAnswers }) => {

  // Comparing user answer and the current answer to set a score
  const getScore = () => {
    let score = 0
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer)
        score += 1
    }
    return score
  }

  const score = getScore()

  // JS function to reload the page, if user click on the "try-again" button
  const handelSubmit = (event) => {
    event.preventDefault()
    window.location.reload()
  }

  return (
    <div>
      <h2><span role="img" aria-label="star">🌟</span>&nbsp;Thank you GOT fan!&nbsp;<span role="img" aria-label="star">🌟</span></h2>
      <div className="summary">

        <h1>
          Your score is {score} of {questions.length}
          {score === questions.length ? " Wow! You are a true Fan!" : ""}
        </h1>
        <hr />

        { questions.map((item, index) => (
            <div className="qa">
            <h4>{item.question}</h4>
            <p className="user-answer highlight">Your answer: {userAnswers[index]}</p>
            <p className="correct-answer">{item.correctAnswer === userAnswers[index] ? "" : `Correct answer: ${item.correctAnswer}`}</p>
          </div>
          ))
        }
 
        <hr />
        <button className="submit-btn" onClick={handelSubmit}> Try again! </button>
      </div>
    </div>
  )
}