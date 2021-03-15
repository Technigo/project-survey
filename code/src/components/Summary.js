import React from 'react'

const Summary = (props) => {

  const {pets} = props
  
  return (
    <div className="summary-section">
    <h1>Thank you for participating</h1>
    <p>Below is a summary of your answers:</p>

    <p>You master. You code ... a day. You have a {pets} and you drink ... cups of coffee a day!</p>

    </div>
  )


}

export default Summary