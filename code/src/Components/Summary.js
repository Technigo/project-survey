import React from 'react'

export const Summary = (props) => {
  console.log(props.answers)

  const result = () => {
    let score = 0
    if (props.answers.married === props.marriages) { score++}
    if (props.answers.spots === props.hangoutSpot) { score++}
    if (props.answers.places === props.datingPlace) { score++ }
    if (props.answers.pets === props.animal) { score++ }
    if (props.answers.favSongs === props.song) { score++ }
    if (props.answers.reasons === props.breakup) { score++ }
    return score
  }

  const score = result()

  const handelSubmit = (event) => {
    event.preventDefault()
    window.location.reload()
  }

  return (
    <div className="SummaryStyle">

      <h2>Thank you Friends fan!</h2>
      <h3> 
        Your score is {score} of 6
        { score === 6 ? " Wow! Impressive!":""}
       </h3>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q1}</h4>
        <p className="user-answer highlight">Your answer: {props.marriages}</p>
        <p className="correct-answer">{props.answers.married===props.marriages ? "":`Correct answer: ${props.answers.married}` }</p>
      </div>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q2}</h4>
        <p className="user-answer highlight">Your answer: {props.hangoutSpot}</p>
        <p className="correct-answer">{props.answers.spots===props.hangoutSpot ? "":`Correct answer: ${props.answers.spots}` }</p>
      </div>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q3}</h4>
        <p className="user-answer highlight">Your answer: {props.datingPlace}</p>
        <p className="correct-answer">{props.answers.places===props.datingPlace ? "":`Correct answer: ${props.answers.places}` }</p>
      </div>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q4}</h4>
        <p className="user-answer highlight">Your answer: {props.animal}</p>
        <p className="correct-answer">{props.answers.pets===props.animal ? "":`Correct answer: ${props.answers.pets}` }</p>

      </div>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q5}</h4>
        <p className="user-answer highlight">Your answer: {props.song}</p>
        <p className="correct-answer">{props.answers.favSongs===props.song ? "":`Correct answer: ${props.answers.favSongs}` }</p>
      </div>
      <hr/>
      <div className="qa">
        <h4>{props.questions.q6}</h4>
        <p className="user-answer highlight">Your answer: {props.breakup}</p>
        <p className="correct-answer">{props.answers.reasons===props.breakup ? "":`Correct answer: ${props.answers.reasons}` }</p>

      </div>
      <hr/>
      <button className="submit-btn" onClick={handelSubmit}> Try again! </button>
    </div>
  )
}
