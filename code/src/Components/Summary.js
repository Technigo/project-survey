import React from 'react'




export const Summary = (props) => {

  return <div className="SummaryStyle">
    {/* <h3>Thank you {props.name}</h3>
    <p>You're now registered at <span className="highlight">Technigo</span></p>
    <p>We are happy that you find us on &nbsp;<span className="highlight">{props.socialMedia}</span></p>
    <p>You have already experience in &nbsp;<span className="highlight">{props.skills}</span></p>
    <p>You will {props.wantsNewsletter ? true : `not`} be recieving Technigo's newsletter to &nbsp; <span className="highlight">{props.wantsNewsletter ? `${props.email}` : ``}</span></p> */}

    <h2>Thank you Friends fan!</h2>
    <p Your favorite character in Friends className="user-answer">{props.name}</p>
    <p className="user-answer highlight">#1:<span>{props.hangoutSpot}</span></p>
    <p className="correct-answer">The Correct answer - At Coffe House</p>
    <p className="user-answer highlight">#2: {props.datingPlace}</p>
    <p className="correct-answer">The Correct answer - They started dating when they were on Ross wedding in London</p>
    <p className="user-answer highlight">#3: {props.animal}</p>
    <p className="correct-answer">The Correct answer - Of course they had a duck and a chick</p>
    <p className="user-answer highlight">#4: {props.song}</p>
    <p className="correct-answer highlight">The Correct answer - Smelly cat, smelly cat ...</p>
    <p className="user-answer highlight">#5: {props.breakup}</p>
    <p className="correct-answer"> The Correct answer - Poor Ross - slpet with the copy-girl</p>
  </div>
};