import React from 'react'

export const Summary = (props) => {
  console.log(props.answers)

  const rating = () => {
    let score = 0;
    if (props.answers.spots === props.hangoutSpot) { score++}
    if (props.answers.places === props.datingPlace) { score++ }
    if (props.answers.pets === props.animal) { score++ }
    if (props.answers.favSongs === props.song) { score++ }
    if (props.answers.reasons === props.breakup) { score++ }
    return score
  }

  const score = rating()


  return <div className="SummaryStyle">
    {/* <h3>Thank you {props.name}</h3>
    <p>You're now registered at <span className="highlight">Technigo</span></p>
    <p>We are happy that you find us on &nbsp;<span className="highlight">{props.socialMedia}</span></p>
    <p>You have already experience in &nbsp;<span className="highlight">{props.skills}</span></p>
    <p>You will {props.wantsNewsletter ? true : `not`} be recieving Technigo's newsletter to &nbsp; <span className="highlight">{props.wantsNewsletter ? `${props.email}` : ``}</span></p> */}

    <h2>Thank you Friends fan!</h2>
    <h3> Your score is: {score} of 5 </h3>

    <p className="user-answer">Your favorite character in Friends is: {props.name}</p>
    <div className="qa">
      <p className="user-answer highlight">Your answer: {props.hangoutSpot}</p>
      <p className="correct-answer">Correct answer: {props.answers.spots}</p>
    </div>
    <div className="qa">
      <p className="user-answer highlight">Your answer: {props.datingPlace}</p>
      <p className="correct-answer">Correct answer: {props.answers.places} </p>
    </div>
    <div className="qa">
      <p className="user-answer highlight">Your answer: {props.animal}</p>
      <p className="correct-answer">Correct answer: {props.answers.pets} </p>
    </div>
    <div className="qa">
      <p className="user-answer highlight">Your answer: {props.song}</p>
      <p className="correct-answer highlight">Correct answer: {props.answers.favSongs}</p>
    </div>
    <div className="qa">
      <p className="user-answer highlight">Your answer: {props.breakup}</p>
      <p className="correct-answer">Correct answer: {props.answers.reasons} </p>
    </div>
  </div>
}
