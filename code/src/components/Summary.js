import React from 'react'

const Summary = (props) => {

  console.log(props.input)
  
  const generateDelimiter = (index, arrayLength) => {
    if (index === arrayLength - 2) {
      return " & "
    } else if (index < arrayLength - 2) {
      return ", "
    } else {
      return
    }
  }

  return (
    <div className="summary-section">
    <h1>Thank you for participating!</h1>
    <h2>Below is a summary of your answers:</h2>

    {/* <p className="summary-text">You master <span>{tech}{generateDelimiter(index, array.length)}</span>. You code {props.hours} hours a day. You have a {props.pets} and you drink {props.coffee} cups of coffee a day!</p> */}

    </div>
  )


}

export default Summary