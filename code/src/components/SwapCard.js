import React from "react"

const SwapCard = (props) => {
  return (
    <div className="card">
      <div className="title">
        <h2 className="swap-card-title">
          I'm looking for a swap-buddy!
        </h2>
      </div>
      <div className="information">
        <p>My name is: <span>{props.name}</span></p>
        <p>I'm coming from: <span>{props.country}</span></p>
        <p>I'm looking for a buddy in: <span>{props.region}</span></p>
        <p>My swap criteria is: <span>{props.amount}{props.unit}</span></p>
        <p>I have these allergies/preferences: <span>{props.allergies}</span></p>
        <p>Other information: <span>{props.other}</span></p>
      </div>
      <div className="image-container">

      </div>
    </div>
  )
}

export default SwapCard