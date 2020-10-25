import React from 'react';

export const Summary = (props) => {
  return(
    <section className="summary">
      <h1>Summary</h1>
      <p className="bold">Your name is</p>
      <p>{props.name}</p>
      <p className="bold">Your email is</p>
      <p>{props.email}</p>
      <p className="bold">Your social security number is</p>
      <p>{props.socSecNum}</p>
      <p className="bold">Was your credit card PIN in the list?</p>
      <p>{props.pinValue}</p>
      {/* <p className="bold">Your location is</p>
      <p>-</p> */}
      <p className="bold">Your home security systems are</p>
      <p>{props.securitySystems}</p>
      <p className="bold">Your mother's maiden name</p>
      <p>{props.maidenName}</p>
      <p className="bold">The name of your first pet was</p>
      <p>{props.petName}</p>
      <p className="bold">Your gender is</p>
      <p>{props.gender}</p>
    </section>
  )
}

