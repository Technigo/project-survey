import React from "react"

const Introduction = ({ forwardSlide }) => {

    return (
    <div className="container">
      <div className="form-container">       
        <h1 className="survey-head">Welcome to Mamma Mia pizzaria</h1>
        <h3 className="pizza-text">Hard day at work ? Why not grab a pizza tonight</h3>
        <button onClick={forwardSlide}>Move on</button>
      </div>
    </div> 
    )
}
 
export default Introduction