import React from 'react' 

const Summary = (props) => {

  return (
    <>
      <h1>Amazing!</h1>
      <p>You read {props.time} during {props.favoriteTime} time. 
      I love that your favorite place to read is {props.place}.</p>
      <button className="start-btn">Restart</button>
      <img className="summary-image" src="assets/woman2.png" alt="header"/>
    </>
  )
}

export default Summary

