import React from 'react'




export const Summary = (props) => {

  return <div className="SummaryStyle">
    <h3>Thank you {props.name}</h3>
    <p>You're now registered at <span className="highlight">Technigo</span></p>
    <p>We are happy that you find us on &nbsp;<span className="highlight">{props.socialMedia}</span></p>
    <p>You have already experience in &nbsp;<span className="highlight">{props.skills}</span></p>
    <p>You will {props.wantsNewsletter ? true : `not`} be recieving Technigo's newsletter to &nbsp; <span className="highlight">{props.wantsNewsletter ? `${props.email}` : ``}</span></p>
  </div>
};