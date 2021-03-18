import React from 'react'



const Summary = (props) => {

  return (

    <div className='container'>
      <p>Hello {props.name}</p>
      <p>So, your favorite fruit is {props.fruit}!</p>
      <p>You eat {props.howManyFruits} fruits per day, really?</p>
    </div>

  )
}

export default Summary