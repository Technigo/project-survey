import React from 'react'



const Summary = (props) => {

  return (

    <div className='container'>
      <h2>Thank you!</h2>
      <h3>Hello {props.name} </h3>
      <p>So, your favorite fruit is {props.fruit}!</p>
      <p>You eat {props.howManyFruits} fruits per day, really?</p>
    </div>

  )
}

export default Summary