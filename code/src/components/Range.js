import React, { useState } from 'react';
//const []

const Range = (props) => {
  const [surveySatisfaction, setSurveySatisfaction] = useState("1")

  const onSatisfactionChange = (event => {
    setSurveySatisfaction(event.target.value)
  }) 
  return (
    <div className="slider-container">
      <p className="question">{props.question}</p>
      <div className="wrapper">
      <label htmlFor="range" className="range-lable">
        <div className="range-item">Negative</div>
        <div className="range-item">Neutral</div>
        <div className="range-item">Awesome</div>
      </label>
      <input
        className= "slider"
        type = "range"
        id = "range"
        min = "1"
        max= "10"
        value ={surveySatisfaction}
        onChange={onSatisfactionChange}
        // value = "5"
      />
      </div>
      <p>Here is our satisfaction: {surveySatisfaction}</p>
    </div>
  )
}
export default Range