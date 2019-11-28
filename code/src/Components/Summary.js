import React from 'react'




export const Summary = (props) => {

  return <div className="SummaryStyle">
    <h3>Thank you {props.name}</h3>
    <p>You're now registered at Technigo</p>
    <p>We are happy that you find us on &nbsp;<span>{props.socialMedia}</span></p>
    <p>You have already experience in &nbsp;<span>{props.skills}</span></p>
    <p>You will {props.wantsNewsletter ? true : `not`} be recieving Technigo's newsletter {props.wantsNewsletter ? `to ${props.email}` : ``}</p>
  </div>
};