import React from 'react' 

const Summary = (item, userValues) => {

  return (
    <div>Thank you for taking time to complete this survey.
      <p className="bold">Here's what you said:</p>
      <p>You purchase Thing: {item.frequency}</p>
      <p>These 3 factors most influence your buying decision: {userValues.join(', ')}</p>
      <p>Your age group is: {item.age}</p>
    </div>
  )
}

export default Summary